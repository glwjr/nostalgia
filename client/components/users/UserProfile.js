import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  makeStyles,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@material-ui/core';
import { fetchUser, setUserArtifacts, setUserCommunities } from '../../store';
import DialogBox from './DialogueBox';
import UserData from './UserData';
import UserProfilePic from './UserProfilePic';
import UserCommunities from './UserCommunities';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    height: '100%',
    width: '100%',
  },
  topRow: {
    display: 'flex',
    borderRadius: '.25rem',
    background: '#0d1217ea;',
  },
  middleRow: {
    padding: 10,
    display: 'flex',
    borderRadius: '.25rem',
    marginBottom: 50,
    background: '#0a1017c0;',
  },
  artifactsGrid: {
    borderRight: '1pt solid grey',
    padding: 20,
    marginTop: 10,
  },
  communitiesGrid: {
    padding: 10,
    marginTop: 5,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const UserProfile = () => {
  const classes = useStyles();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const communities = useSelector(state => state.communities);
  const artifacts = useSelector(state => state.artifacts);
  const userCommunity = useSelector(state => state.userCommunity);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(setUserArtifacts(id));
    dispatch(setUserCommunities(id));
  }, [id]);

  useEffect(() => {
    dispatch(setUserArtifacts(id));
  }, []);

  const currentUser = user.user;
  const userArtifacts = artifacts.user_artifacts;

  return (
    <>
      <Grid>
        {auth.id === id &&
          !currentUser.age &&
          !currentUser.location &&
          !currentUser.bio ? (
          <DialogBox user={user} />
        ) : (
          <span></span>
        )}
      </Grid>
      <Container className={classes.container}>
        <Grid container spacing={0} className={classes.topRow}>
          <Grid item xs={12} sm={8} md={8}>
            <UserData user={currentUser} id={id} communities={communities} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <UserProfilePic user={currentUser} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.middleRow}>
          <Grid item xs={12} sm={8} md={8}>
            <div>{currentUser.firstName}'s Artifacts</div>

            <ImageList className={classes.artifactsGrid}>
              {userArtifacts.map(artifact => {
                return (
                  <ImageListItem key={artifact.id}>
                    <Link to={`/artifacts/${artifact.id}`}>
                      <img
                        src={`.././public/artifactUploads/${artifact.fileName}`}
                      ></img>
                    </Link>

                    <ImageListItemBar title={artifact.name} />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Grid>
          <Grid
            item
            className={classes.communitiesGrid}
            xs={12}
            sm={4}
            md={4}
            lg={4}
          >
            {currentUser.firstName}'s Communities
            {userCommunity && userCommunity.length > 0 ? (
              userCommunity.map(({ community }) => {
                return (
                  <div key={community.id} className={classes.card}>
                    <UserCommunities
                      community={community}
                      auth={auth}
                      user={currentUser}
                    />
                  </div>
                );
              })
            ) : (
              <div> Add some communities </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfile;
