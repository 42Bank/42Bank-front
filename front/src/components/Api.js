export const getManageApplication = (userId) => {
  const result = [
		{date: "09.10",
		contents: "러쉬 평가",
		prize: 8,
		},
		{date: "10.10",
		contents: "러쉬 평가",
		prize: 18},
		{date: "11.11",
		contents: "스티커 구매",
		prize: -2}
	];

  return result
};

export const shopProducts = () => {
	const products = [
		{
			"id": 1,
			"name": "Jakku",
			"description": "Utapau",
			"price": 100,
			"quantity": 20,
			"begin_at": null,
			"end_at": null,
			"category_id": 1,
			"created_at": "2017-11-22T13:41:20.457Z",
			"updated_at": "2017-11-22T13:41:20.498Z",
			"kind": "auto",
			"slug": "jakku",
			"image": {
				"url": "/uploads/product/image/1/logo.png",
				"thumb": {
					"url": "/uploads/product/image/1/thumb_logo.png"
				}
			},
			"is_uniq": true,
			"one_time_purchase": false
		},
		{
			"id": 2,
			"name": "Sullust",
			"description": "Lothal",
			"price": 100,
			"quantity": 20,
			"begin_at": null,
			"end_at": null,
			"category_id": 1,
			"created_at": "2017-11-22T13:41:20.528Z",
			"updated_at": "2017-11-22T13:41:20.561Z",
			"kind": "auto",
			"slug": "sullust",
			"image": {
				"url": "/uploads/product/image/2/logo.png",
				"thumb": {
					"url": "/uploads/product/image/2/thumb_logo.png"
				}
			},
			"is_uniq": true,
			"one_time_purchase": false
		},
		{
			"id": 3,
			"name": "Geonosis",
			"description": "Naboo",
			"price": 100,
			"quantity": 20,
			"begin_at": null,
			"end_at": null,
			"category_id": 1,
			"created_at": "2017-11-22T13:41:20.590Z",
			"updated_at": "2017-11-22T13:41:20.621Z",
			"kind": "auto",
			"slug": "geonosis",
			"image": {
				"url": "/uploads/product/image/3/logo.png",
				"thumb": {
					"url": "/uploads/product/image/3/thumb_logo.png"
				}
			},
			"is_uniq": true,
			"one_time_purchase": false
		}
	]
}
