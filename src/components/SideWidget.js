import React from "react";
import MainIcon from "../assets/img/icon-sabakantaro.png";
import TwitterLogo from "../assets/img/logo-twitter.png";

function SideWidget() {
  return (
    <div className="col-lg-4">
      <div className="card mb-4">
        <div className="card-header">プロフィール</div>
        <div className="text-center my-5 px-5">
          <img
            alt="icon"
            className="rounded mx-auto"
            width={200}
            src={MainIcon}
          />
          <h5 className="mt-3">さばかんたろう</h5>
          <a
            className="btn btn-primary"
            href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.ryofitness.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5EE7ouvEtI7stwT7G&region=follow_link&screen_name=E7ouvEtI7stwT7G"
            aria-disabled="true"
          >
            <img alt="icon" width={20} src={TwitterLogo} />
            フォローする
          </a>
          <p className="mt-3">
            筋トレ好きのサラリーマン。
            <br />
            筋トレ×栄養学で15kg増量しガリガリを卒業。
            <br />
            ジムに行く以外は引きこもってプログラミングやブログを書いたり、映画やアニメを観て過ごしてます。
            <br />
            さばをよく食べます。
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideWidget;
