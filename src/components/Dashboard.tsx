import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootStore } from '../Store';

export default function Dashboard() {
  const repoState = useSelector((state: RootStore) => state.repo);
  return (
    <div>
      <div className="user-dashboard">
              <br/>
              {repoState.user.name !== "" &&
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Card style={{ width: "300px", backgroundColor: '#effaf0', flex: '0 1 300px' }}>
                    <CardContent>
                      <h3>Total Collections</h3>
                      <h1>{repoState.user.collectionList.length}</h1>
                    </CardContent>
                  </Card>
                  <Card style={{ width: "300px", backgroundColor: '#effaf0', flex: '0 1 300px' }}>

                    <CardContent>
                      <img
                        style={{ width: '200px', height: '200px' }}
                        src={repoState.user.avatar}
                        alt={""}
                      />
                      <h1>{repoState.user.github}</h1>
                      <h4>Collections: {repoState.user.collectionList.length}</h4>
                      <h4>Repositories: {repoState.user.allRepo.length}</h4>
                      <h4>Follower: {repoState.user.follower}</h4>
                      <h4>Following: {repoState.user.following}</h4>
                    </CardContent>
                  </Card>
                  <div>{' '}</div>
                  <br />

                  
                </div>
              }
            </div>
    </div>
  )
}


