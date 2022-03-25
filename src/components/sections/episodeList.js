import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from '@u-wave/react-youtube'; // eslint-disable-line import/no-unresolved
import styled from "styled-components"
import rss from "../../images/Social Media Icons Black - V1.0 - RSS.png"
import soundcloud from "../../images/Social Media Icons Black - V1.0 - Soundcloud.png"
import spotify from "../../images/Social Media Icons Black - V1.0 - Spotify.png"
import youtube from "../../images/Social Media Icons Black - V1.0 - YouTube.png"
import instagram from "../../images/Social Media Icons Black - V1.0 - Instagram.png"

const {
  useCallback,
  useState,
  useEffect
} = React;

const videos = [
  { id: 'ZuuVjuLNvFY', name: 'JUNNY - kontra (Feat. Lil Gimch, Keeflow)' },
  { id: 'PYE7jXNjFWw', name: 'T W L V - Follow' },
  { id: 'ld8ugY47cps', name: 'SLCHLD - I can\'t love you anymore' },
  { id: null, name: '<none>' },
];

const qualities = ['auto', '240', '380', '480', '720', '1080', '1440', '2160'];

// const hashVideoRx = /^#!\/video\/(\d)$/;
// const hash = typeof window.location !== 'undefined'
//   ? window.location.hash : ''; // eslint-disable-line no-undef
// const defaultVideo = hashVideoRx.test(hash)
//   ? parseInt(hash.replace(hashVideoRx, '$1'), 10)
//   : 0;

function EpisodeList({video}) {
  console.log("props", video)
  const [videoIndex, setVideoIndex] = useState(0);
  const [suggestedQuality, setSuggestedQuality] = useState('auto');
  const [volume, setVolume] = useState(1);
  const [paused, setPaused] = useState(false);

  const videor = video[videoIndex];


  function selectVideo(index) {
    setVideoIndex(index);
  }

  const handlePause = useCallback((event) => {
    setPaused(event.target.checked);
  }, []);

  const handlePlayerPause = useCallback(() => {
    setPaused(true);
  }, []);

  const handlePlayerPlay = useCallback(() => {
    setPaused(false);
  }, []);

  const handleVolume = useCallback((event) => {
    setVolume(parseFloat(event.target.value));
  }, []);

  const handleQuality = useCallback((event) => {
    setSuggestedQuality(qualities[event.target.selectedIndex]);
  }, []);

  return (
    <Row>
      <SectionTitle style={{color: "white"}}>Check out the latest episodes here:</SectionTitle>
      <div className="col s8 center-align">
        <YouTube
          video={videor.id}
          width={380}
          height={280}
          autoplay
          controls={false}
          suggestedQuality={suggestedQuality}
          volume={volume}
          paused={paused}
          onPause={handlePlayerPause}
          onPlaying={handlePlayerPlay}
          style={{alignSelf: "center"}}
        />
      </div>
      <div className="col s4" style={{width: "88.333333%", overflowX : 'auto', height: "33px"}}>
        <div className="collection" style={{width: "555px", border: "none"}}>
          {video.map((choice, index) => {
            if (videor === choice) {
              return(
                <CollectionItemActive>
                    <VideoTitleContainer>
                      <a
                        key={choice.id}
                        href={`#!/video/${index}`}
                        style={{marginRight: "20px", color: "white"}}
                        onClick={() => selectVideo(index)}
                      >
                        {choice.name}
                      </a>
                      <Subtitle>18 March 2022</Subtitle>
                    </VideoTitleContainer>
                    {/**<SocialContainer>
                      <a style={{width: "33px"}} target="_blank" href="https://www.instagram.com/elyseos_foundation/">
                        <SocialSymbol src={instagram} />
                      </a>
                      <a style={{width: "44px"}} target="_blank" href="https://www.youtube.com/channel/UCnqCcdQLZQUzG4CDvbw9jhA">
                        <SocialSymbol style={{width: "38px"}} src={youtube} />
                      </a>
                      <a style={{width: "33px"}} target="_blank" href="https://open.spotify.com/show/1nCyBkQ4zU2lVNjx7cRyjz">
                        <SocialSymbol src={spotify} />
                      </a>
                      <a style={{width: "33px"}} target="_blank" href="https://rss.com/podcasts/alohabokaye/">
                        <SocialSymbol src={rss} />
                      </a>
                  </SocialContainer>*/}
                </CollectionItemActive>
              )
            }
            else {
              return(
                <CollectionItem>
                    <VideoTitleContainer>
                      <a
                        key={choice.id}
                        href={`#!/video/${index}`}
                        style={{marginRight: "20px", color: "white"}}
                        onClick={() => selectVideo(index)}
                      >
                        {choice.name}
                      </a>
                      <Subtitle>18 March 2022</Subtitle>
                    </VideoTitleContainer>
                    {/**<SocialContainer>
                      <a style={{width: "33px"}} target="_blank" href="https://www.instagram.com/elyseos_foundation/">
                        <SocialSymbol src={instagram} />
                      </a>
                      <a style={{width: "44px"}} target="_blank" href="https://www.youtube.com/channel/UCnqCcdQLZQUzG4CDvbw9jhA">
                        <SocialSymbol style={{width: "38px"}} src={youtube} />
                      </a>
                      <a style={{width: "33px"}} target="_blank" href="https://open.spotify.com/show/1nCyBkQ4zU2lVNjx7cRyjz">
                        <SocialSymbol src={spotify} />
                      </a>
                      <a style={{width: "33px"}} target="_blank" href="https://rss.com/podcasts/alohabokaye/">
                        <SocialSymbol src={rss} />
                      </a>
                  </SocialContainer>*/}
                </CollectionItem>
              )
            }

          })}
        </div>
      </div>
    </Row>
  );
}

export default EpisodeList;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: auto;
  right: auto;
`

const CollectionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const CollectionItemActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  background-color: #ED6F1B;
`

const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  width: 63.3333333%;
`

const ImageandTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`
const SectionTitle = styled.h5`
  color: ${props => props.theme.color.primary};
  margin-bottom: 0px;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: white;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 0px;
  font-style: italic;
`

const SocialSymbol = styled.img`
  height: 28px;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-right: 50px;

`
