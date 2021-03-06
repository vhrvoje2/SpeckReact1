import React from 'react';
import Loader from 'react-loader-spinner'
import { LoaderGrid } from './LoaderStyle.js';

export default class App extends React.Component {
      render() {
       return(
           <LoaderGrid>
                <Loader
                    type="ThreeDots"
                    color="#CE003D"
                    height={100}
                    width={100}
                 />
           </LoaderGrid>
       );
      }
   }