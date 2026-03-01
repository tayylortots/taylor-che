import { useEffect, useState, RefObject, useCallback } from 'react';

interface CustomScrollbarProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export function CustomScrollbar({ scrollContainerRef }: CustomScrollbarProps) {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);

  const update = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight) { setThumbHeight(0); return; }
    setScrolled(scrollTop > 20);
    const ratio = clientHeight / scrollHeight;
    const height = Math.max(ratio * clientHeight, 36);
    const maxTop = clientHeight - height;
    const top = scrollHeight === clientHeight ? 0 : (scrollTop / (scrollHeight - clientHeight)) * maxTop;
    setThumbHeight(height);
    setThumbTop(top);
  }, [scrollContainerRef]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [scrollContainerRef, update]);

  // Drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    setDragStartY(e.clientY);
    setDragStartScroll(scrollContainerRef.current?.scrollTop ?? 0);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const { scrollHeight, clientHeight } = el;
      const trackHeight = clientHeight;
      const maxThumbTop = trackHeight - thumbHeight;
      const delta = e.clientY - dragStartY;
      const scrollRatio = delta / maxThumbTop;
      el.scrollTop = dragStartScroll + scrollRatio * (scrollHeight - clientHeight);
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, dragStartY, dragStartScroll, thumbHeight, scrollContainerRef]);

  if (thumbHeight === 0) return null;

  return (
    <div
      data-custom-scrollbar
      className="absolute right-0 top-0 h-full z-[100] pointer-events-auto"
      style={{ width: 8 }}
    >
      {/* thumb */}
      <div
        onMouseDown={onMouseDown}
        className="absolute right-[2px] rounded-full cursor-pointer transition-opacity duration-200"
        style={{
          width: 4,
          height: thumbHeight,
          top: thumbTop,
          background: 'rgba(0,0,0,0.22)',
          opacity: scrolled ? 1 : 0,
        }}
      />
    </div>
  );
}