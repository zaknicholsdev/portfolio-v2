import { useParams } from 'react-router-dom';
import './Project.css';
import BedTime from '../Details/BedTime';
import HandyDiet from '../Details/HandyDiet';
import Adopty from '../Details/Adopty';
import Calculator from '../Details/Calculator';
import Filmatory from '../Details/Filmatory';
import HandyDietV2 from '../Details/HandyDietV2';
import OnlineWarriorClassic from '../Details/OnlineWarriorClassic';
import Portfolio from '../Details/Portfolio';

const Project = () => {
    const { name } = useParams();

    switch (name) {
        case 'LateSleeper':
            return <BedTime name={name} />
        case 'Online Warrior Classic':
            return <OnlineWarriorClassic name={name} />
        case 'EasyDiet':
            return <HandyDiet name={name} />
        case 'Adopty':
            return <Adopty name={name} />
        case 'Portfolio':
            return <Portfolio name={name} />
        case 'Calculator':
            return <Calculator name={name} />
        case 'Filmatory':
            return <Filmatory name={name} />
        case 'HandyDiet-v2':
            return <HandyDietV2 name={name} />
        default:
            return console.error(`Sorry, there's no project named: ${name}.`);
    };
};

export default Project;