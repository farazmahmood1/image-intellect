import { useState, useEffect, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import './PhotoStyles.scss';
import { ImagesBaseUrl } from '../SourceFiles/BaseUrl';
import { ImagesPhotosUrl } from '../SourceFiles/BaseUrl';
const PhotoSection = () => {
  const imagePaths = [
    `${ImagesPhotosUrl}img51.PNG`,
    `${ImagesPhotosUrl}img2.jpg`,
    `${ImagesPhotosUrl}img3.jpg`,
    `${ImagesPhotosUrl}img4.jpg`,
    `${ImagesPhotosUrl}img5.jpg`,
    `${ImagesPhotosUrl}img6.jpg`,
    `${ImagesPhotosUrl}img7.jpg`,
    `${ImagesPhotosUrl}img8.jpg`,
    `${ImagesPhotosUrl}img9.jpg`,
    `${ImagesPhotosUrl}img10.jpg`,
    `${ImagesPhotosUrl}img11.jpg`,
    `${ImagesPhotosUrl}img12.jpg`,
    `${ImagesPhotosUrl}img19.jpg`,
    `${ImagesPhotosUrl}img13.jpg`,
    `${ImagesPhotosUrl}img15.jpg`,
    `${ImagesPhotosUrl}img18.jpg`,
    `${ImagesPhotosUrl}img20.jpg`,
    `${ImagesPhotosUrl}img21.jpg`,
    `${ImagesPhotosUrl}img22.jpg`,
    `${ImagesPhotosUrl}img23.jpg`,
    `${ImagesPhotosUrl}img24.jpg`,
    `${ImagesPhotosUrl}img25.jpg`,
    `${ImagesPhotosUrl}img26.jpg`,
    `${ImagesPhotosUrl}img27.jpg`,
    `${ImagesPhotosUrl}img28.jpg`,
    `${ImagesPhotosUrl}img30.jpg`,
    `${ImagesPhotosUrl}img31.jpg`,
    `${ImagesPhotosUrl}img32.jpg`,
    `${ImagesPhotosUrl}img33.jpg`,
    `${ImagesPhotosUrl}img34.jpg`,
    `${ImagesPhotosUrl}img35.jpg`,
    `${ImagesPhotosUrl}img36.jpg`,
    `${ImagesPhotosUrl}img37.jpg`,
    `${ImagesPhotosUrl}img38.jpg`,
    `${ImagesPhotosUrl}img39.jpg`,
    `${ImagesPhotosUrl}img42.jpg`,
    `${ImagesPhotosUrl}img43.jpg`,
    `${ImagesPhotosUrl}img44.jpg`,
    `${ImagesPhotosUrl}img45.jpg`,
    `${ImagesPhotosUrl}img46.jpg`,
    `${ImagesPhotosUrl}img47.jpg`,
    `${ImagesPhotosUrl}img48.jpg`,
    `${ImagesPhotosUrl}img49.PNG`,
    `${ImagesPhotosUrl}img50.PNG`,
    `${ImagesPhotosUrl}img52.PNG`,
    `${ImagesPhotosUrl}img56.PNG`,
    `${ImagesPhotosUrl}img57.PNG`,
    `${ImagesPhotosUrl}img58.PNG`,
    `${ImagesPhotosUrl}img59.jpg`,
    `${ImagesPhotosUrl}img60.jpg`,
    `${ImagesPhotosUrl}img61.jpg`,
    `${ImagesPhotosUrl}img62.jpg`,
    `${ImagesPhotosUrl}img63.jpg`,
    `${ImagesPhotosUrl}img64.jpg`,
    `${ImagesPhotosUrl}img65.jpg`,
    `${ImagesPhotosUrl}img66.jpg`,
    `${ImagesPhotosUrl}img67.jpg`,
    `${ImagesPhotosUrl}img68.jpg`,
    `${ImagesPhotosUrl}img69.jpg`,
    `${ImagesPhotosUrl}img70.jpg`,
    `${ImagesPhotosUrl}img71.jpg`,
    `${ImagesPhotosUrl}img72.jpg`,
    `${ImagesPhotosUrl}img73.jpeg`,
    `${ImagesPhotosUrl}img74.png`,
    `${ImagesPhotosUrl}img75.jpg`,
    `${ImagesPhotosUrl}img76.jpg`,
    `${ImagesPhotosUrl}img77.jpg`,
    `${ImagesPhotosUrl}img78.jpg`,
    `${ImagesPhotosUrl}img79.jpg`,
    `${ImagesPhotosUrl}img80.jpg`,
    `${ImagesPhotosUrl}img81.jpg`,
    `${ImagesPhotosUrl}img82.jpg`,
    `${ImagesPhotosUrl}img83.jpg`,
    `${ImagesPhotosUrl}img84.jpg`,
    `${ImagesPhotosUrl}img85.jpg`,
    `${ImagesPhotosUrl}img86.jpg`,
    `${ImagesPhotosUrl}img87.jpg`,
    `${ImagesPhotosUrl}img1.jpg`,
    `${ImagesPhotosUrl}img88.jpg`,
    `${ImagesPhotosUrl}img89.jpg`,
    `${ImagesPhotosUrl}img90.jpg`,
    `${ImagesPhotosUrl}img91.jpg`,
    `${ImagesPhotosUrl}img92.jpg`,
    `${ImagesPhotosUrl}img93.jpg`,
  ];
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  useEffect(() => {
    topFunction();
  }, []);

  // hello
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className='photo-section' style={{ backgroundColor: "#e9e9e9" }}>
      <div className='title-image'>
        <img itemProp="image" src={`${ImagesBaseUrl}photocover.jpg`} alt=" " />
      </div>
      <div className='photo-section-content-element-parent'>
        <div className="photo-section-content-element">
          <h1 style={{ fontSize: 28, textAlign: 'center' }}>Pre-Wedding Photographers in Dallas, Houston, Austin, and San Antonio</h1>
          <p style={{ textAlign: 'justify' }}>A pre-wedding photoshoot is the perfect way to capture sweet memories before the most awaited day of your life—a celebration you plan to commemorate in royal style. The pre-wedding shoot not only allows you to know your partner better but also captures moments that will be cherished in the future. It's an opportunity to prepare for the best clicks on the wedding day, experimenting with poses, styles, and positions.</p>
          <p style={{ textAlign: 'justify' }}>Inviting professional and the best pre-wedding photographers in Dallas, Houston, Austin, and San Antonio is crucial. You can also choose the best pre-wedding photographer elsewhere based on your preferred destination wedding location or the place where you intend to tie the knot.</p>
          <h1 style={{ fontSize: 28, textAlign: 'center' }}>Pre-Wedding Photographers in Dallas, Houston, Austin, and San Antonio and Nationwide</h1>
          <p style={{ textAlign: 'justify' }}>A professional pre-wedding photographer in any location can help a couple overcome the nervousness of facing the camera during the actual wedding. Pre-wedding photographers in California and nearby areas are skilled professionals who excel at capturing the best moments and preserving them in beautiful albums. Yellow Mellow specializes in pre-wedding photographs and videos, including cinematography.</p>
          <h1 style={{ fontSize: 28, textAlign: 'center' }}>Pre-Wedding Photoshoots in Dallas, Houston, Austin, and San Antonio and Other Parts of North America</h1>
          <p style={{ textAlign: 'justify' }}>For your convenience, we have curated attractive plans and packages specifically designed for you. Our experienced pre-wedding photographers in Dallas, Houston, Austin, and San Antonio, and other areas, are dedicated to reaching your chosen location for the pre-wedding photo shoot. Additionally, we suggest the best destinations for the pre-wedding photoshoot. Feel free to contact us according to your requirements, review the details, and find the perfect solutions for your grand day. Your satisfaction is our achievement, and we spare no effort in providing you with the best photographs.</p>
          <h1 style={{ fontSize: 28, textAlign: 'center' }}>Candid Wedding Photographers in Dallas, Houston, Austin, and San Antonio</h1>
          <p style={{ textAlign: 'justify' }}>What could be more surprising and exciting than reliving the photographs of your wedding day, capturing the best moments and emotions that hold special significance for you? Credit for these heartfelt photographs goes to experienced candid wedding photographers in Dallas, Houston, Austin, and San Antonio with a proven track record. Candid photographers in these cities are well-aware of the special photography options, capturing moments you aren't even aware someone is photographing.</p>
          <h1 style={{ fontSize: 28, textAlign: 'center' }}>Candid Wedding Photographers in Dallas, Houston, Austin, and San Antonio</h1>
          <p style={{ textAlign: 'justify' }}>The wedding day is the most important day in the lives of both the bride and the groom's families, filled with heightened emotions. Traditional photography often involves staged poses and smiles, losing the natural charm of the moment. Candid photography, capturing real emotions without the subject being aware, preserves the authenticity. Yellow Mellow excels in premium Candid Wedding Photography in Dallas, Houston, Austin, and San Antonio, and beyond. We capture memories that stay alive. Yellow Mellow – Your Premium Candid Wedding Photographer in Dallas, Houston, Austin, and San Antonio.</p>
          <p style={{ textAlign: 'justify' }}>Yellow Mellow is your one-stop trusted and recognized photography studio to hire professional candid photographers in Dallas, Houston, Austin, and San Antonio, or professional candid photographers in Noida and other parts of these cities. Stay in touch with experienced professionals, and you will undoubtedly receive the best clicks ever made. These photographs are provided in albums and memory cards or chips of your choice for wall display or other decoration purposes. Feel free to contact us based on your requirements to call professional candid wedding photographers in Dallas, Houston, Austin, and San Antonio.</p>
          <br />
          <p style={{ textAlign: "center" }}>
            Feel free to contact as per your requirement and get the best pre wedding photo-shoots.
          </p>
        </div>
        <div className="photo-section-photos-element">
          {imagePaths.slice(0, 15).map((imgPath, index) => (
            <div key={index} onClick={() => openImageViewer(index)}>
              <img src={imgPath} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {/* photos gallery */}
      <div className="photos-container">
        {imagePaths.slice(15).map((imgPath, index) => (
          <div key={index} onClick={() => openImageViewer(index)}>
            <img src={imgPath} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* <div style={{backgroundColor:"red"}}>
      <button className="close-btn" onClick={closeImageViewer}>&times;</button> */}
      {isViewerOpen && (
        <ImageViewer
          style={{ background: "#fff" }}
          src={imagePaths}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          customControls={[
            context => (
              <button
                className="custom-close-btn"
                onClick={() => context.close()}
              >
                Close
              </button>
            ),
          ]}
        />
      )}
      {/* </div> */}
      <div className="photosection">
        <div className="photosection-image">
          <img decoding="async" itemProp="image" src={`${ImagesBaseUrl}photocontent.jpg`} alt />
        </div>
        <div className="photosection-content">
          <div className="photosection-content-inner">
            <h3 className="photosection-text-holder" style={{ marginTop: "140px" }}>Cinematic Pre Wedding Videos</h3>
            <p className='photosection-text-holder'>What's better than a video that you can see again and again and still love it as much? Rock your pre wedding shoot with the beautiful concepts and locations that our team expertise in. Go on a pre wedding shoot to amazing destinations and locales handpicked by Wedding knots which reflect your mood. Whether it is the natural beauty of the hills that beckon you or the tantalising sea side or as they say nothing symbolises love more than the epic Taj Mahal, we will have just the right places for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhotoSection;