import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiBellOutline } from "@mdi/js";
import { mdiBookmarkOutline } from "@mdi/js";
import { mdiCheckDecagramOutline } from "@mdi/js";
import { mdiDotsHorizontalCircleOutline } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiAccountOutline } from "@mdi/js";
import { mdiListBoxOutline } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <div className="twitterIcon hide">
        <a href="./home">
          <Icon path={mdiTwitter} className="svg2" />
        </a>
      </div>
      <div className="Home icon">
        <a href="./home">
          <Icon path={mdiHome} className="svg" />
          <div className="iconText">
            <span>Home</span>
          </div>
        </a>
      </div>
      <div className="search icon">
        <a href="./explore">
          <Icon path={mdiMagnify} className="svg" />
          <div className="iconText">
            <span>Explore</span>
          </div>
        </a>
      </div>
      <div className="notification icon">
        <a href="./notification">
          <Icon path={mdiBellOutline} className="svg" />
          <div className="iconText">
            <span>Notifications</span>
          </div>
        </a>
      </div>
      <div className="message icon">
        <a href="./message">
          <Icon path={mdiEmailOutline} className="svg" />
          <div className="iconText">
            <span>Messages</span>
          </div>
        </a>
      </div>
      <div className="list hide icon2">
        <a href="./SamuelSylv9/lists">
          <Icon path={mdiListBoxOutline} className="svg3" />
          <div className="iconText">
            <span>Lists</span>
          </div>
        </a>
      </div>
      <div className="bookmark hide icon2">
        <a href="./bookmarks">
          <Icon path={mdiBookmarkOutline} className="svg3" />
          <div className="iconText">
            <span>Bookmarks</span>
          </div>
        </a>
      </div>
      <div className="verified hide icon2">
        <a href="./verified-choose">
          <Icon path={mdiCheckDecagramOutline} className="svg3" />
          <div className="iconText">
            <span>Verified</span>
          </div>
        </a>
      </div>
      <div className="profile hide icon2">
        <a href="./SamuelSylv9">
          <Icon path={mdiAccountOutline} className="svg3" />
          <div className="iconText">
            <span>Profile</span>
          </div>
        </a>
      </div>
      <div className="more hide icon2">
        <Icon path={mdiDotsHorizontalCircleOutline} className="svg3" />
        <div className="iconText">
          <span>More</span>
        </div>
      </div>
      <div className="hide2 tweet">
        <a href="./tweet">
          <div className="tweet2">
            <span>Tweet</span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
