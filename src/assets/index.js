// 导入所有图片
import companylogo from './companylogo.jpg';
// logo 的小尺寸 webp 版本
import companylogoWebp128 from './companylogo.jpg?imagetools&format=webp&width=128';

// 产品卡片展示大小约 432x288，生成 288/432/768 宽度，格式 avif/webp/jpg
import Product1Avif from './Product1.jpg?imagetools&format=avif&width=288;432;768&as=srcset';
import Product1Webp from './Product1.jpg?imagetools&format=webp&width=288;432;768&as=srcset';
import Product1JpgSet from './Product1.jpg?imagetools&format=jpg&width=288;432;768&as=srcset';
import Product1_432 from './Product1.jpg?imagetools&width=432';

import Product2Avif from './Product2.jpg?imagetools&format=avif&width=288;432;768&as=srcset';
import Product2Webp from './Product2.jpg?imagetools&format=webp&width=288;432;768&as=srcset';
import Product2JpgSet from './Product2.jpg?imagetools&format=jpg&width=288;432;768&as=srcset';
import Product2_432 from './Product2.jpg?imagetools&width=432';

import Product3Avif from './Product3.jpg?imagetools&format=avif&width=288;432;768&as=srcset';
import Product3Webp from './Product3.jpg?imagetools&format=webp&width=288;432;768&as=srcset';
import Product3JpgSet from './Product3.jpg?imagetools&format=jpg&width=288;432;768&as=srcset';
import Product3_432 from './Product3.jpg?imagetools&width=432';

// Case study 图片：Results Section 展示约 600x450，生成 400/600/900 宽度
import Story1Avif from './Story1.JPG?imagetools&format=avif&width=400;600;900&as=srcset';
import Story1Webp from './Story1.JPG?imagetools&format=webp&width=400;600;900&as=srcset';
import Story1JpgSet from './Story1.JPG?imagetools&format=jpg&width=400;600;900&as=srcset';
import Story1_600 from './Story1.JPG?imagetools&width=600';

import Story2Avif from './Story2.JPG?imagetools&format=avif&width=400;600;900&as=srcset';
import Story2Webp from './Story2.JPG?imagetools&format=webp&width=400;600;900&as=srcset';
import Story2JpgSet from './Story2.JPG?imagetools&format=jpg&width=400;600;900&as=srcset';
import Story2_600 from './Story2.JPG?imagetools&width=600';

import Story3Avif from './Story3.jpg?imagetools&format=avif&width=400;600;900&as=srcset';
import Story3Webp from './Story3.jpg?imagetools&format=webp&width=400;600;900&as=srcset';
import Story3JpgSet from './Story3.jpg?imagetools&format=jpg&width=400;600;900&as=srcset';
import Story3_600 from './Story3.jpg?imagetools&width=600';

// 背景图：使用 1920 宽 webp 作为默认（Hero 背景）
import background1_1920 from './background1.jpg?imagetools&format=webp&width=1920';
import background2_1920 from './background2.jpg?imagetools&format=webp&width=1920';
import background3_1920 from './background3.jpg?imagetools&format=webp&width=1920';

// 导出统一的assets对象
const assets = {
  // logo
  companylogo,
  companylogoWebp128,
  // 产品图：提供 fallback 与各格式 srcset
  Product1: Product1_432,
  Product1SrcSet: { avif: Product1Avif, webp: Product1Webp, jpg: Product1JpgSet },
  Product2: Product2_432,
  Product2SrcSet: { avif: Product2Avif, webp: Product2Webp, jpg: Product2JpgSet },
  Product3: Product3_432,
  Product3SrcSet: { avif: Product3Avif, webp: Product3Webp, jpg: Product3JpgSet },
  // Case study 图片
  Story1: Story1_600,
  Story1SrcSet: { avif: Story1Avif, webp: Story1Webp, jpg: Story1JpgSet },
  Story2: Story2_600,
  Story2SrcSet: { avif: Story2Avif, webp: Story2Webp, jpg: Story2JpgSet },
  Story3: Story3_600,
  Story3SrcSet: { avif: Story3Avif, webp: Story3Webp, jpg: Story3JpgSet },
  // 背景图（webp）
  background1: background1_1920,
  background2: background2_1920,
  background3: background3_1920,
};

export default assets;
