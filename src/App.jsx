import {BrowserRouter} from 'react-router-dom';
import {Router} from './routes/index';
import {ConfigProvider, Layout} from 'antd';
import {Footer, Header} from 'antd/es/layout/layout';
import {LessonEnd} from './components/shared/LessonEnd';
import {LinearProgress} from './components/shared/LinearProgress';

export const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainerDisabled: '#f0f0f0',
            colorTextDisabled: 'black',
          },
        }}
      >
        <Layout style={{minHeight: '100vh'}}>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '70px',
              backgroundColor: 'white',
            }}
          >
            <LinearProgress />
          </Header>
          <Layout
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="App">
              <Router />
              <LessonEnd />
            </div>
          </Layout>
          <Footer style={{textAlign: 'center'}}>
            Tatar tele ©{new Date().getFullYear()} Created by{' '}
            <a
              href="https://abdulovdb-com.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              AbdulovDB
            </a>
          </Footer>
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  );
};
