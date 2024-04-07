import Review from "../review/Review";
import data from "./data";
export const clients = data.map((client) => (
  <Review
    key={client.key}
    para={client.para}
    img={client.img}
    name={client.name}
    job={client.job}
  />
));

