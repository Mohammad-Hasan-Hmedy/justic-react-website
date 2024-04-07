import ExpertCard from "../expertCard/ExpertCard";
import expert from "./expert";
export const exrerts = expert.map((exp) => (
  <ExpertCard key={exp.key} icon={exp.icon} para={exp.para} />
));
