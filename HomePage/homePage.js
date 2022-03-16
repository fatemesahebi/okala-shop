import {
  Header,
  BannerSlider,
  DailyOffer,
  FourthBanner,
  DoubleBanner,
  OkalaBlogHeader,
  ListBrands,
  CategoryProducts,
  ListMiddleNavbar,
  FooterContainer,
  OkalaBlog,
  HeaderFooterProvider,
  MenuMobile,
} from "../Components";
import { Box } from "@mui/material";
function HomePage() {
  return (
    <div>
      <HeaderFooterProvider>
        <BannerSlider />
        <ListMiddleNavbar />
        <DailyOffer />
        <FourthBanner />
        <CategoryProducts similarProducts={false} category={"محصولات جدید"} />
        <CategoryProducts
          similarProducts={false}
          category={"پرفروشترین در منطقه شما"}
        />
        <CategoryProducts
          similarProducts={false}
          category={"پرتخفیف ترین ها"}
        />
        <DoubleBanner />
        <CategoryProducts
          similarProducts={false}
          category={"نوشیدنی و دمنوش ها"}
        />
        <CategoryProducts similarProducts={false} category={"میوه و سبزیجات"} />
        <CategoryProducts similarProducts={false} category={"مواد غذایی"} />
        <CategoryProducts similarProducts={false} category={"آرایشی بهداشتی"} />
        <CategoryProducts similarProducts={false} category={"خواربار"} />
        <OkalaBlogHeader />
        <OkalaBlog />
        <ListBrands />
        <MenuMobile />
      </HeaderFooterProvider>
    </div>
  );
}

export default HomePage;
