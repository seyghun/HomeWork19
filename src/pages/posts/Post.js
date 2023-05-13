import './Post.css';
import ray from "./images/ray.jpg";
import message from "./images/message.png";
import repost from "./images/repost.png";
import like from "./images/like.png";
import download from "./images/download.png";
import anakin from "./images/anakin.jpg";
import check from "./images/check.png";
import han from "./images/han.jpg";
import chubakaAndHan from "./images/chubakaAndHan.jpg";
import darth_avatar from "./images/darth_avatar.jpg";
import darth_post from "./images/darth_post.jpg";

export default function Post() {
    return (
        <div>
            <div className='card'>
                <div className='user_info'>
                    <img className='avatar' src={anakin} alt='Anakin'></img>
                    <p id='acc_name'>Anakin Skywalker</p>
                    <img className='check' src={check} alt='check'></img>
                    <p className='profile_tag'>@anakin_skywalker</p>
                    <p id='date'>26 лют.</p>
                </div>

                <div className='post_part'>
                    <p>WTF? Who is Ray? Why she is Skywalker? Luke...?</p>
                    <img id='post_img' src={ray} alt='Ray'></img>
                    <div className='actions'>
                        <img id='message_ico' src={message} alt='message'></img>
                        <p>512</p>
                        <img id='repost_ico' src={repost} alt='repost'></img>
                        <p>98</p>
                        <img id='like_ico' src={like} alt='like'></img>
                        <p>1712</p>
                        <img id='download_ico' src={download} alt='download'></img>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='user_info'>
                    <img className='avatar' src={han} alt=']Han'></img>
                    <p id='acc_name'>Han Solo</p>
                    <img className='check' src={check} alt='check'></img>
                    <p className='profile_tag'>@han_solo</p>
                    <p id='date'>11 сер.</p>
                </div>

                <div className='post_part'>
                    <p>My favorite photo, it turned out great, bro. @chewbacca</p>
                    <img id='post_img' src={chubakaAndHan} alt='chubakaAndHan'></img>
                    <div className='actions'>
                        <img id='message_ico' src={message} alt='message'></img>
                        <p>512</p>
                        <img id='repost_ico' src={repost} alt='repost'></img>
                        <p>98</p>
                        <img id='like_ico' src={like} alt='like'></img>
                        <p>1712</p>
                        <img id='download_ico' src={download} alt='download'></img>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='user_info'>
                    <img className='avatar' src={darth_avatar} alt='Darth'></img>
                    <p id='acc_name'>Darth Vader</p>
                    <img className='check' src={check} alt='check'></img>
                    <p className='profile_tag'>@darth_vader</p>
                    <p id='date'>18 лип.</p>
                </div>

                <div className='post_part'>
                    <p>Love myself... #evil</p>
                    <img id='post_img' src={darth_post} alt='chubakaAndHan'></img>
                    <div className='actions'>
                        <img id='message_ico' src={message} alt='message'></img>
                        <p>512</p>
                        <img id='repost_ico' src={repost} alt='repost'></img>
                        <p>98</p>
                        <img id='like_ico' src={like} alt='like'></img>
                        <p>1712</p>
                        <img id='download_ico' src={download} alt='download'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};