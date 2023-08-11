import { useNavigate } from "react-router-dom";

const headerElements = [
  { label: 'TESLA', route: '/' },
  { label: 'Model S', route: 'model_s' },
  { label: 'Model X', route: 'model_x' },
  { label: 'CYBERTRUCK', route: 'cybertruck' },
  { label: 'Menu', route: 'null' }
];

export default function Header () {
    const navigate = useNavigate()
    return (
      <nav>
        <ul>
          {headerElements.map(({ label, route }) => (
            <li key={label} onClick={() => {
            if (!label === 'Menu') {navigate(route);
            }
            }}
            >{label}</li>
          ))}
        </ul>
      </nav>
    );
}