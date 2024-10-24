import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

//store
import store from '@store/index';

//styel
import "@styles/global.css"
//routes
import RouteingApp from '@routes/AppRouter';


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouteingApp/>
    </Provider>
)