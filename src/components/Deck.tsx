import React, { Suspense } from "react";
import { useRouteMatch, Redirect, useHistory } from "react-router";
import { SlideBackground } from "./deck/SlideBackground";
import { SlideEffects } from "./deck/SlideEffects";
import { SlideLoading } from "./deck/SlideLoading";
import { Button } from "@apollo/space-kit/Button";
import { Popover } from "@apollo/space-kit/Popover";
import { List } from "@apollo/space-kit/List";
import { ListItem } from "@apollo/space-kit/ListItem";
import { Link } from "react-router-dom";

export interface SlideDefinition {
  slug: string;
  Slide: React.ComponentType;
}

interface Props {
  slides: SlideDefinition[];
  footer?: React.ReactNode;
}

export function Deck({ slides, footer }: Props) {
  const history = useHistory();
  const match = useRouteMatch<{ slug: string }>();

  const idx = slides.findIndex((s) => s.slug === match?.params.slug);
  const Slide = slides[idx]?.Slide;
  if (!Slide) {
    return <Redirect to={`/slides/${slides[0].slug}`} />;
  }
  const nextSlide = slides[(idx + 1) % slides.length];
  const prevSlide =
    idx === 0 ? slides[slides.length - 1] : slides[(idx - 1) % slides.length];

  return (
    <SlideBackground>
      <SlideEffects
        onPrev={() => history.push(`/slides/${prevSlide.slug}`)}
        onNext={() => history.push(`/slides/${nextSlide.slug}`)}
      >
        <Suspense fallback={<SlideLoading />} key={idx}>
          <Slide />
        </Suspense>
      </SlideEffects>
      <div className="flex items-center justify-between text-xs">
        {footer}
        {idx > 0 && (
          <Popover
            content={
              <List>
                {slides.map((slide, slideIndex) => (
                  <ListItem
                    as={<Link to={`/slides/${slide.slug}`} />}
                    key={slide.slug}
                  >
                    {slideIndex}: {slide.slug}
                  </ListItem>
                ))}
              </List>
            }
            trigger={
              <Button className="text-white text-xs" size="small" feel="flat">
                {idx} / {slides.length - 1}
              </Button>
            }
          />
        )}
      </div>
    </SlideBackground>
  );
}
