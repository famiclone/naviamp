type Song = {
  name: string;
  artist: string;
  album: string;
  coverUrl: string;
};

const Main = ({song}: {song: Song | null}) => {
  return <div className="app__main">
    <div className="app__main-cover-image">
      <img src={song.coverUrl} />
    </div>
  </div>
}

export default Main;
