
let api = "https://api.foursquare.com/v2/venues/search?";
api += "query=cafe";
api += "&ll=31.274827,30.0236666";

api += "&radius=10000";
api += "&client_id=NOCN4VI11D2RDNZ33XMA1VZ4KKYDXRP1NLS2KTG0ZKDDOOQE";
api += "&client_secret=P3JAKHQPZNCTPYNTTRQZ5PZ4OFZ0S1WRLXYGSOSH2TI44QPO";
api += "&v=20180720";

export const getAll = () =>
  fetch(`${api}`)
    .then(res => res.json())
    .then(res => res.response.venues)

export const getLatLong = () =>
  fetch(`${api}`)
    .then(res => res.json())
    .then(res => res.response.venues)
    .then(res => res.map((item) => {return item.location}))
