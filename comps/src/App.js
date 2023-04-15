import Route from './components/Route';
import DropDwnPage from './pages/DropDownPage';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import Sidebar from './components/Sidbar';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 mt-4 gap-4">
      <Sidebar />

      <div className="col-span-5">
        <Route path={'/accordion'}>
          <AccordionPage />
        </Route>
        <Route path={'/table'}>
          <TablePage />
        </Route>
        <Route path={'/counterpage'}>
          <CounterPage initialCount={10} />
        </Route>
        <Route path={'/buttons'}>
          <ButtonPage />
        </Route>
        <Route path={'/'}>
          <DropDwnPage />
        </Route>
        <Route path={'/modal'}>
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
