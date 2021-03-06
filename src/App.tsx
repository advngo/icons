import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import { groupedIcons } from './icons';
import 'react-toastify/dist/ReactToastify.css';
import logo from './favicon.png'
import Instructions from './components/Instructions';

const notify = (text: string, Icon: any) => toast(
  <span><Icon /> {text}</span>,
  {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }
);

const GroupIcons: React.FC<{ icons: any[] }> = ({ icons }) => {

  return <div className="grid grid-cols-6 md:grid-cols-6 gap-4 w-full items-center justify-between">
    {icons.map((Icon, key) => {
      const name = Icon.name.replace('Svg', '')
      const ref = React.createRef<any>()
      return <div
        key={key}
        className="w-full flex flex-col justify-center items-center hover:scale-150"
        onMouseEnter={() => ref.current.style.visibility = 'visible'}
        onMouseLeave={() => ref.current.style.visibility = 'hidden'}
        onClick={() => {
          navigator.clipboard.writeText(Icon.name);
          notify('Copied!', Icon);
        }}
      >
        <Icon className="p-1" key={key} />
        <code style={{ visibility: 'hidden' }} ref={ref}>
          <small >{name}</small>
        </code>
      </div>
    })}
  </div>
}

function App() {
  return (
    <div className="App m-auto md:w-8/12 p-10">
      <ToastContainer />
      <title>Ícones Advngo</title>
      <div className="flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col h-full py-10">
        <Instructions />
      </div>
      <div className="flex flex-col h-full py-10">
        {Object.values(groupedIcons).map((group, key) => {
          return <div>
            <div className="text-left">
              <h3>{Object.keys(groupedIcons)[key]}</h3>
            </div>
            <hr className="pb-5" />
            <GroupIcons key={key} icons={Object.values(group)} />
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
