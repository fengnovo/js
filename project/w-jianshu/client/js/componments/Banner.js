import React, {
	Component
} from 'react';

import BannerAnim from 'rc-banner-anim';

const {
	Element,
	Arrow
} = BannerAnim;
const BgElement = Element.BgElement;

import './../../css/banner.scss';

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgArray: [
				'https://upload.jianshu.io/admin_banners/web_images/4581/8a43bf0089cd31850b7a493412ac1f39d30f1763.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
				'https://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
				'https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
				'https://upload.jianshu.io/admin_banners/web_images/4552/532152a690ad5a98d1c22eb48a316ca7ff428970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
			]
		};
	}


	render() {
		return (
			<div className="banner">
				<BannerAnim autoPlay>
					{
						this.state.imgArray.map((item, index) => {
							return <Element key={index}
									prefixCls="banner-user-elem">
									<BgElement
										className="bg"
										key={index+'bg'}
										style={{
											backgroundImage: `url(${item}`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
										}}
									/>
								</Element>
							})
					}
				</BannerAnim>
			</div>
		);
	}
}

export default Banner;