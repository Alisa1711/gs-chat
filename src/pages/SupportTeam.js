import React from 'react';
import {TopPanel} from '../components/TopPanel';
import {TeamsView} from '../components/TeamsView';
import {BackPanel} from '../components/BackPanel';
import {avatars} from '../assets/avatars';
import {MoreMembers} from '../components/Member';
import {SentButton} from '../components/SentButton';

const Members = [
  {name: 'Екатерина', avatar: avatars[1]},
  {name: 'Наталья', avatar: avatars[2]},
  {name: 'Наталья', avatar: avatars[2]},
  {name: 'Наталья', avatar: avatars[1]},
  {name: 'Наталья', avatar: avatars[1]},
  {name: 'Наталья', avatar: avatars[1]},
  {name: 'Константин', avatar: avatars[2]},
  {name: 'Константин', avatar: avatars[2]},
  {name: 'Константин', avatar: avatars[2]},
  {name: 'Дима', avatar: avatars[1]},
  {name: 'Дима', avatar: avatars[1]},
  {name: 'Константин', avatar: avatars[2]},
  {name: 'Константин', avatar: avatars[2]},
];

export const SupportTeam = () => {
  return (
    <div className="gs-chat">
      <TopPanel support={true} state="static"/>
      <BackPanel state="static" text="Команда поддержки"/>
      <div className="gs-chat__content">
        <TeamsView memberSize="large"  sentButton={<SentButton parent="teamsview" size="min"/>}  members={Members} state="full" title="Константин, доброе утро" subtitle="Команда отвечает в течении часа">
        </TeamsView>
      </div>
    </div>
  );
};
