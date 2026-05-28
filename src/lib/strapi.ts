// import { env } from "../env";
import qs from "qs";

type StrapiFilterValue = string | number | boolean | null;

type StrapiFilterOperators = {
	$eq?: StrapiFilterValue;
	$ne?: StrapiFilterValue;
	$lt?: number;
	$lte?: number;
	$gt?: number;
	$gte?: number;
	$in?: StrapiFilterValue[];
	$notIn?: StrapiFilterValue[];
	$contains?: string;
	$containsi?: string;
	$startsWith?: string;
	$endsWith?: string;
	$null?: boolean;
	$notNull?: boolean;
	$between?: [number, number];
};

interface StrapiWhere {
	[key: string]: StrapiFilterValue | StrapiFilterOperators | StrapiWhere;
}

type LimitSchema = {
	field?: string;
	number?: number;
	order?: "asc" | "desc";
	where?: StrapiWhere;
	nullsLast?: boolean;
};

interface Props {
	endpoint: string;
	query?: Record<string, string>;
	limit?: LimitSchema;
	wrappedByList?: boolean;
	fields?: string[];
	more?: boolean;
	populate?: Record<string, boolean>;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByList - If the response is a list, unwrap it
 * @param more - If true, fetch more data
 * @param populate - The fields to populate
 * @returns
 */
export default async function fetchApi<T>({
	endpoint,
	query,
	limit,
	fields,
	more,
	populate,
}: Props): Promise<T> {
	if (endpoint.startsWith("/")) {
		endpoint = endpoint.slice(1);
	}

	const queryParams: {
		populate?: string[];
		pagination?: { pageSize?: number; page?: number };
		sort?: string;
		filters?: StrapiWhere;
	} & Record<string, unknown> = {
		...(query ?? {}),
	};

	const shouldApplyNullsLast =
		Boolean(limit?.field) &&
		(limit?.order ?? "asc") === "asc" &&
		(limit?.nullsLast ?? true);

	const populateFields = [
		...(fields ?? []),
		...Object.entries(populate ?? {})
			.filter(([, shouldPopulate]) => shouldPopulate)
			.map(([key]) => key),
	];

	if (populateFields.length > 0) {
		queryParams.populate = populateFields;
	}

	if (more) {
		queryParams.pagination = {
			...(queryParams.pagination ?? {}),
			pageSize: 100,
			page: 100,
		};
	}

	if (limit?.field) {
		queryParams.sort = `${limit.field}:${limit.order ?? "asc"}`;
	}

	if (typeof limit?.number === "number") {
		queryParams.pagination = {
			...(queryParams.pagination ?? {}),
			pageSize: shouldApplyNullsLast ? 100 : limit.number,
		};
	}

	if (limit?.where) {
		queryParams.filters = limit.where;
	}

	const queryString = qs.stringify(queryParams, { encodeValuesOnly: true });
	const url = `${import.meta.env.STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ""}`;

	console.log(url.toString());

	// let page = 1;

	const res = await fetch(url.toString(), {
		method: "GET",
		headers: {
			Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
		},
	});
	const pageData = await res.json();

	const data = pageData.data || pageData;

	if (shouldApplyNullsLast && Array.isArray(data) && limit?.field) {
		const sortedData = [...data].sort((a, b) => {
			const aValue = a?.[limit.field as keyof typeof a] as unknown;
			const bValue = b?.[limit.field as keyof typeof b] as unknown;

			const aIsNull = aValue == null;
			const bIsNull = bValue == null;

			if (aIsNull && bIsNull) {
				return 0;
			}

			if (aIsNull) {
				return 1;
			}

			if (bIsNull) {
				return -1;
			}

			if (typeof aValue === "number" && typeof bValue === "number") {
				return aValue - bValue;
			}

			return String(aValue).localeCompare(String(bValue));
		});

		if (typeof limit.number === "number") {
			return sortedData.slice(0, limit.number) as T;
		}

		return sortedData as T;
	}

	return data as T;
}
