import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectsList";
import './Project.css';  // Подключаем стили

const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">{project.title}</h1>
                
                {/* Описание проекта */}
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                    <img
                        src={project.imgBig}
                        alt={project.title}
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        {/* Перечисляемый список особенностей */}
                        <ul className="project-features">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        {/* Горизонтальная линия между особенностями и ассортиментом */}
                        <hr className="divider" />
                        
                        {/* Ассортимент */}
                        <h3 className="assortment-title">Ассортимент:</h3>
                        <ul className="project-assortment">
                            {project.assortment.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        {/* Горизонтальная линия между ассортиментом и характеристиками */}
                        <hr className="divider" />

                        {/* Заголовок для таблицы характеристик */}
                        <h3 className="specs-title">Характеристики:</h3>

                        {/* Таблица характеристик */}
                        <table className="project-specs">
                            <tbody>
                                {project.specs.map((spec, index) => (
                                    <tr key={index}>
                                        <td className="specs-name">{spec.name}</td>
                                        <td>{spec.value1}</td>
                                        {spec.value2 && <td>{spec.value2}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="button-container">
                            <a
                                href="https://web.telegram.org/k/#@polkiqwase"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-outline-3"
                            >
                                заказать
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Project;
