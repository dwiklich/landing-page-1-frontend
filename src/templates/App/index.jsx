import React from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';

import * as Styled from './styles';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
