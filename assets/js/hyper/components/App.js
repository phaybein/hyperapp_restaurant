import { h, app } from 'hyperapp'
import Nav from './Nav';
import Header from './Header';
import OurStory from './OurStory';
import SpecialMenu from './SpecialMenu';
import Quote from './Quote';

export default function App({ state, actions }) {
  return (
    <div class={'app'}>
      <Nav state={state} actions={actions} />
      <Header state={state} actions={actions} />
      <OurStory state={state} actions={actions} />
      <SpecialMenu state={state} actions={actions} />
      <Quote state={state} actions={actions} />
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
