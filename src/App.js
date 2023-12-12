import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import EducationalContent from './pages/EducationalContent';
import InteractiveDemos from './pages/InteractiveDemos';
import UseCasesShowcase from './pages/UseCasesShowcase';
import CommunityForum from './pages/CommunityForum';
import AiNews from './pages/AiNews';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/educational-content" component={EducationalContent} />
        <Route path="/interactive-demos" component={InteractiveDemos} />
        <Route path="/use-cases-showcase" component={UseCasesShowcase} />
        <Route path="/community-forum" component={CommunityForum} />
        <Route path="/ai-news" component={AiNews} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
