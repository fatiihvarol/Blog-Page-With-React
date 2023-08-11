
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPage from './BlogPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className='content'>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/create">
                            <Create />
                        </Route>
                        <Route exact path="/blogs/:id">
                            <BlogPage />
                        </Route>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;
