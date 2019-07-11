import React from 'react';
import {Link, Route} from 'wouter';
//#if _DEBUG
import HotManager from './HotManager';
//#endif
import {Chat} from './pages/Chat';
import {ChatBlocked} from './pages/ChatBlocked';
import {CoWorkerContacts} from './pages/CoWorkerContacts';
import {CommonChat} from './pages/CommonChat';
import {SupportEmtyState} from './pages/SupportEmtyState';
import {SupportList} from './pages/SupportList';
import {SupportListScrollUp} from './pages/SupportListScrollUp';
import {SearchEmtyState} from './pages/SearchEmtyState';
import {SupportTeam} from './pages/SupportTeam';
import {SupportNewConversation} from './pages/SupportNewConversation';
import {SupportConversation} from './pages/SupportConversation';
import {HappyBirthday} from './pages/HappyBirthday';
import {HappyBirthdayCat} from './pages/HappyBirthdayCat';
import {DropdownPage} from './pages/DropdownPage'
import {DragnDropProcess} from './pages/DragnDropProcess';
import {DragnDropError} from './pages/DragnDropError';
import {Messages} from './pages/Messages'
import {PersonalChat} from './pages/PersonalChat';
import {Desktop} from './pages/Desktop';
import {ModalDeleteMessage} from './components/ModalDeleteMessage';
import {ChatBlockedWithModal} from './pages/ChatBlockedWithModal';
import {All} from './pages/All';

const App = () => {
  return (
    <div>
      <Route path="/" component={All}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/chat-blocked" component={ChatBlocked}/>
      <Route path="/co-worker-contacts" component={CoWorkerContacts}/>
      <Route path="/common-chat" component={CommonChat}/>
      <Route path="/support-emty-state" component={SupportEmtyState}/>
      <Route path="/support-list" component={SupportList}/>
      <Route path="/support-list-scroll-up" component={SupportListScrollUp}/>
      <Route path="/search-emty-state" component={SearchEmtyState}/>
      <Route path="/support-team" component={SupportTeam}/>
      <Route path="/support-new-conversation" component={SupportNewConversation}/>
      <Route path="/support-conversation" component={SupportConversation}/>
      <Route path="/happy-birthday/bear" component={HappyBirthday}/>
      <Route path="/happy-birthday/cat" component={HappyBirthdayCat}/>
      <Route path="/dropdown" component={DropdownPage}/>
      <Route path="/drag-n-drop-process" component={DragnDropProcess}/>
      <Route path="/drag-n-drop-error" component={DragnDropError}/>
      <Route path="/messages" component={Messages}/>
      <Route path="/desktop" component={Desktop}/>
      <Route path="/modal-delete-message" component={ModalDeleteMessage}/>
      <Route path="/chat-blocked-with-modal" component={ChatBlockedWithModal}/>
    </div>
  );
};

//#if _DEBUG
HotManager.register(module.id);
//#endif

export default App;
