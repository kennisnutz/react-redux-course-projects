//imports

// import ButtonPage from './pages/ButtonPage';
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'ksdsnf',
      label: 'Can I use React for frontend',
      Content: 'You can use react on any project you want',
    },
    {
      id: 'kuds93',
      label: 'Can I use Jsx for frontend',
      Content: 'You can use Jsx on any project you want',
    },
    {
      id: 'kswunsdif',
      label: 'Can I use Python for frontend',
      Content: 'You can use Python on any project you want',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
