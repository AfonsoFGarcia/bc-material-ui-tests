import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

function Autoplayer({ videoId }: { videoId: string }) {
  const [started, setStarted] = useState<boolean>(false)
  const [event, setEvent] = useState<{ playVideo(): void }>()

  const playNow = async (event: { target: { playVideo(): void } }) => {
    if (!started) {
      setStarted(true)
      setEvent(event.target)
    }
  }

  useEffect(() => {
    if (event) {
      event.playVideo()
      setStarted(false)
    }
  }, [started, event])
  return (
    <div style={{ margin: '1rem auto' }}>
      <YouTube
        videoId={videoId}
        opts={{
          height: '315',
          width: '560',
          playerVars: {
            autoplay: 1,
            enablejsapi: 1,
          },
        }}
        onReady={playNow}
      />
    </div>
  )
}

export default Autoplayer
