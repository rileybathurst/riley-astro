// import { env } from "../env";
import qs from "qs";

interface Props {
	endpoint: string;
	query?: Record<string, string>;
	wrappedByKey?: string;
	wrappedByList?: boolean;
	fields?: string[];
	more?: boolean;
	populate?: Record<string, boolean>;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param more - If true, fetch more data
 * @param populate - The fields to populate
 * @returns
 */
export default async function fetchApi<T>({
	endpoint,
	wrappedByKey,
	fields,
	more,
	populate,
}: Props): Promise<T> {
	if (endpoint.startsWith("/")) {
		endpoint = endpoint.slice(1);
	}

	const keyValueFields = fields?.map((field, index) => {
		return {
			name: field,
			number: index,
		};
	});

	const passedFields = keyValueFields
		? new URLSearchParams(
				keyValueFields.reduce(
					(acc, field) => {
						acc[`populate[${field.name}]`] = "true";
						return acc;
					},
					{} as Record<string, string>,
				),
			).toString()
		: "";

	// the questions mark is always needed but its fine to run it straight into an ampersand
	// http://45.79.101.19:1340/api/plans?&pagination[pageSize]=100

	// Convert populate object to array query string: populate[1]=hero&populate[2]=collaborators
	var populateParams = "";
	if (populate) {
		populateParams = Object.keys(populate)
		.map((key, idx) => `populate[${idx + 1}]=${key}`)
		.join("&");
	}

	// console.log(populateParams);

	// populate ? `?${qs.stringify({ populate }, { encode: false })}` : "";

	// 100 is max page size
	const url = new URL(
		`${import.meta.env.STRAPI_URL}/api/${endpoint}${
			fields ? `?${passedFields}` : ""
		}${more ? `&pagination[pageSize]=100&pagination[page]=100` : ""}${
			populateParams ? `?${populateParams}` : ""
		}`,
	);

  	// console.log('Fetching from Strapi API:');
	console.log(url.toString());

	let allData: T[] = [];
	let page = 1;

	const res = await fetch(url.toString(), {
		method: "GET",
		headers: {
			Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
		},
	});
	// const { data, meta } = await res.json();
	const pageData = await res.json();

	// if (wrappedByKey) { // I think everything is wrapped by data?
	const data = pageData.data || pageData;
	// console.log('Strapi API response data:');
	// console.log(data);

/* 	while (more) {
		url.searchParams.set("pagination[page]", page.toString());

		// console.log(`Page ${page} data:`);
		// console.log(pageData);

		if (wrappedByKey) {
			allData = allData.concat(pageData[wrappedByKey]);
		} else {
			allData = allData.concat(pageData);
		}
		break;
		/* hasMore =
			pageData.meta.pagination.page < pageData.meta.pagination.pageCount;
		page++;
	}  */

	// console.log(typeof pageData);

	return data as T;
}
