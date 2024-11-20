import React, { useEffect } from 'react';
import './VideoStyles.scss';
import { ImagesBaseUrl } from '../SourceFiles/BaseUrl';

const VideoSection = () => {

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    topFunction();
  }, []);

  const VideosList = [
    {
      id: "1",
      Video: "Video 1",
      src: "https://www.youtube.com/embed/_hvBHh9rorc?si=9I3CJvyx22hVbNay",
    },
    {
      id: "2",
      Video: "Video 2",
      src: "https://www.youtube.com/embed/Ogaws_VNyzc?si=Hy0qxVKgkpLxpfhI",
    },
    {
      id: "3",
      Video: "Video 3",
      src: "https://www.youtube.com/embed/tUTbwKqJ6Vw?si=Bg9lJHNKDIf5iqzE",
    },
    {
      id: "4",
      Video: "Video 4",
      src: "https://www.youtube.com/embed/LYqDIrUMWTo?si=nHHgW08fXMI2nxiB",
    },
    {
      id: "5",
      Video: "Video 5",
      src: "https://www.youtube.com/embed/kQxIXS44f3Q?si=pQr8bjkTB86A6yPR",
    },
    {
      id: "6",
      Video: "Video 6",
      src: "https://www.youtube.com/embed/1NBwW6r5DiI?si=5T1dVCRwNPyFwywD",
    },
  ];

  return (
    <div className='video-title-imagetitle-image' style={{ backgroundColor: "#e9e9e9" }}>
      <div className='title-image'>
        <img itemProp="image" src={`${ImagesBaseUrl}videocover.jpg`} alt=" " />
      </div>
      <div className="video-section-content-element">
        <h1 style={{ fontSize: 28, textAlign: 'left' }}>Cinematic Pre-Wedding Videos</h1>
        <p style={{ textAlign: 'justify' }}>Experience the joy of reliving your special moments with a video that captivates you every time. Elevate your pre-wedding shoot with our team's expertise in crafting beautiful concepts and selecting picturesque locations. Embark on a pre-wedding adventure to stunning destinations curated by us, tailored to match your mood. Whether you're drawn to the natural beauty of hills, the allure of the seaside.,We have the perfect places for your memorable journey."</p>
        <h1 style={{ fontSize: 28, textAlign: 'left' }}>Unveiling Love’s Symphony: Captivating Pre-Wedding Videos That Immortalize Your Journey</h1>
        <p style={{ textAlign: 'justify' }}>Step into a world of enchanting romance and let us bring your love story to life through captivating pre-wedding videos. Our team of skilled cinematographers specializes in crafting breathtaking visual narratives that showcase your unique bond and personalities. From scenic outdoor locations to intimate indoor settings, we meticulously plan every shot to create a cinematic experience capturing the essence of your relationship. With state-of-the-art equipment and a keen eye for detail, we transform your pre-wedding moments into a mesmerizing journey of love and anticipation. Let us create a timeless keepsake for you to cherish forever. Contact us today to embark on this unforgettable cinematic adventure.</p>

        <h1 style={{ fontSize: 28, textAlign: 'left' }}>Wedding Cinematographer in Dallas, Houston, Austin, and San Antonio
        </h1>
        <p style={{ textAlign: 'justify' }}>With all the preparations, from shopping for wedding gowns to bridal dresses, groom's accessories, catering arrangements, wedding venues, and invitation cards, there's one crucial aspect you might be missing. Choosing a professional and the best wedding cinematographer in Dallas, Houston, Austin, and San Antonio, or a complete team, is a crucial decision. They are the professionals who know how to create the best videos of your grand day, covering all rituals and moments.</p>

        <h1 style={{ fontSize: 28, textAlign: 'left' }}>Cinematic Wedding Videos by Wedding Cinematographers
        </h1>
        <p style={{ textAlign: 'justify' }}>Professional wedding cinematographers in Dallas, Houston, Austin, and San Antonio are well-aware of the importance of grand day videos. Cinematography focuses on telling a story—your love story—that you can watch repeatedly without getting bored. Yellow Mellow cinematography aims at and delivers just that. It recreates the special love story you and your partner share by capturing and framing the true and overwhelming emotions experienced on your blissful day. Your stylish story is created through images, music, and a mix of speeches shot in small clips that last a lifetime. Watch our highlights to feel our sensibility and taste.</p>

        <p style={{ textAlign: 'justify' }}>Every moment is captured as our team of professionals spends proper time covering all parts of the event venue. From the bride's entry to the VARMALA rituals and from the dance together to the dining experience, every moment is covered to make your wedding moments even more special. You can use the cinematography videos to upload on YouTube or create short reels for social media. The choice is yours; call our professional wedding cinematographers in Dallas, Houston, Austin, and San Antonio for grand day videos and moments.</p>
      </div>
      <div className="row videosection-innerwrap">
        <ul className="videosection-listing">
          {VideosList.map((video) => (
            <li key={video.id} className="col-md-6">
              <div className="individualvideosection-list">
                <div className="videosection-imgsect">
                  <iframe
                    width="357"
                    height="357"
                    src={video.src}
                    title={`YouTube video player - ${video.Video}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="videosection">
        <div className="videosection-image">
          <img decoding="async" itemProp="image" src={`${ImagesBaseUrl}videocontent.jpg`} alt />
        </div>
        <div className="videosection-content">
          <div className="videosection-content-inner">
            <h3 className="videosection-text-holder">Candid Wedding Photography</h3>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default VideoSection;
