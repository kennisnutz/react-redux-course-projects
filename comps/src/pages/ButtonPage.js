import Button from '../components/Button';
import { GoBell, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  return (
    <>
      <h1 className="text-center font-bold text-xl">Buttons</h1>
      <div className="grid grid-cols-4 gap-3 bg-red-100">
        <div>
          <Button primary>
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button primary outlined>
            Primary
          </Button>
        </div>
        <div>
          <Button primary rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button primary outlined rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>
            <GoDatabase />
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary outlined>
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button secondary rounded outlined>
            Secondary
          </Button>
        </div>
        <div>
          <Button success>Success</Button>
        </div>
        <div>
          <Button success outlined>
            Success
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success
          </Button>
        </div>
        <div>
          <Button success rounded outlined>
            Success
          </Button>
        </div>

        <div>
          <Button danger>Danger</Button>
        </div>
        <div>
          <Button danger outlined>
            Danger
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger
          </Button>
        </div>
        <div>
          <Button danger rounded outlined>
            Danger
          </Button>
        </div>

        <div>
          <Button warning>Warning</Button>
        </div>
        <div>
          <Button warning outlined>
            Warning
          </Button>
        </div>

        <div>
          <Button warning rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button warning outlined rounded>
            Warning
          </Button>
        </div>
      </div>
    </>
  );
}

export default ButtonPage;
