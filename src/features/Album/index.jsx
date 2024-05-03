import React from 'react';
import Albumlist from './components/Albumlist';

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: 'Ballad Việt được remix đầy mới lạ và cuốn hút',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/1/3/9/0139b1f71ed807473a500a6a37695c65.jpg',
    },
    {
      id: 2,
      name: 'Cứ quẩy thôi, Remix hay cứ để ở đây lo',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/0/2/2/002212df89c3a2cc6c4caff37b63be95.jpg',
    },
    {
      id: 3,
      name: 'Remix Việt nóng nhất hiện nay, có tại đây!',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/7/9/7/0797a7925970af0fa46a2f55cb2d6b50.jpg',
    },
  ];

  return (
    <div>
      <h2>Album List</h2>
      <Albumlist albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
