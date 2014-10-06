// Created by iWeb 3.0.4 local-build-20130714

function createMediaStream_id2()
{return IWCreatePhotocast("http://yarylo.sytes.net/galereya/photo/rik_2012-13/Na_urokah_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://yarylo.sytes.net/galereya/photo/rik_2012-13',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://yarylo.sytes.net/galereya/photo/rik_2012-13',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(176,176),new IWSize(176,0),new IWSize(211,191),27,27,0,new IWSize(26,25)),new IWPhotoFrame([IWCreateImage('Na_urokah_files/kid_frame-1_01.jpg'),IWCreateImage('Na_urokah_files/kid_frame-1_02.jpg'),IWCreateImage('Na_urokah_files/kid_frame-1_03.jpg'),IWCreateImage('Na_urokah_files/kid_frame-1_06.jpg'),IWCreateImage('Na_urokah_files/kid_frame-1_09.jpg'),IWCreateImage('Na_urokah_files/kid_frame-1_08.jpg'),IWCreateImage('Na_urokah_files/kid_frame-1_07.jpg'),IWCreateImage('Na_urokah_files/kid_frame-1_04.jpg')],null,0,1.000000,0.000000,0.000000,0.000000,0.000000,13.000000,13.000000,13.000000,12.000000,121.000000,120.000000,121.000000,120.000000,null,null,null,0.500000),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.600000}),null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Na_urokah_files/Na_urokahMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
