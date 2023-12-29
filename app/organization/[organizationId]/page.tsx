import React from 'react';
import {create} from "@/actions/board/create";

const OrganizationPage = () => {

  return (
    <div>
      <form action={create}>
        <input id='title' name="title" required placeholder={'Enter a board title'} className={'border-black border p-1'}/>
      </form>
    </div>
  );
};

export default OrganizationPage;