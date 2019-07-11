import React from 'react';
import {Link, Route} from 'wouter';

export const All = () => {
  return (
    <div>
      <Link href="/chat">
        <p className="link">chat</p>
      </Link>
      <Link href="/chat-blocked">
        <p className="link">chat-blocked</p>
      </Link>
      <Link href="/co-worker-contacts">
        <p className="link">co-worker-contacts</p>
      </Link>
      <Link href="/common-chat">
        <p className="link">common-chat</p>
      </Link>
     {/* <Link href="/personal-chat">
        <p className="link">personal-chat</p>
      </Link>*/}
      <Link href="/support-emty-state">
        <p className="link">support-emty-state</p>
      </Link>
      <Link href="/support-list">
        <p className="link">support-list</p>
      </Link>
      <Link href="/support-list-scroll-up">
        <p className="link">support-list-scroll-up</p>
      </Link>
      <Link href="/search-emty-state">
        <p className="link">search-emty-state</p>
      </Link>
      <Link href="/support-team">
        <p className="link">support-team</p>
      </Link>
      <Link href="/support-new-conversation">
        <p className="link">support-new-conversation</p>
      </Link>
      <Link href="/support-conversation">
        <p className="link">support-conversation</p>
      </Link>
      <Link href="/happy-birthday/bear">
        <p className="link">happy-birthday bear</p>
      </Link>
      <Link href="/happy-birthday/cat">
        <p className="link">happy-birthday cat</p>
      </Link>
      <Link href="/dropdown">
        <p className="link">dropdown</p>
      </Link>
      <Link href="/drag-n-drop-process">
        <p className="link">drag-n-drop-process</p>
      </Link>
      <Link href="/drag-n-drop-error">
        <p className="link">drag-n-drop-error</p>
      </Link>
      <Link href="/messages">
        <p className="link">messages</p>
      </Link>
      <Link href="/desktop">
        <p className="link">Desktop</p>
      </Link>
      <Link href="/modal-delete-message">
        <p className="link">modal-delete-message</p>
      </Link>
      <Link href="/chat-blocked-with-modal">
        <p className="link">chat-blocked-with-modal</p>
      </Link>
    </div>
  );
};