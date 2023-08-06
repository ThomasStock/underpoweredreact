const calculateCanvas = (args: { map: { width: number; height: number }; boxRect: DOMRectReadOnly; margin?: number }) => {
  const { map, boxRect, margin = 0 } = args;
  const mapAspectRatio = map.width / map.height;

  const marginedBoxHeight = boxRect.height - margin * 2;
  const marginedBoxWidth = boxRect.width - margin * 2;

  // Aspect ratio of the viewport (box fills viewport via css)
  const boxAspectRatio = marginedBoxWidth / marginedBoxHeight;

  let width, height;

  // Resize the canvas so that it has the same aspect ratio as our map.
  // Canvas is centered with css so there is some 'leftover' either left/right or bottom.top
  //  while we make it as big as possible.
  if (mapAspectRatio > boxAspectRatio) {
    width = marginedBoxWidth;
    height = marginedBoxWidth / mapAspectRatio;
  } else {
    height = marginedBoxHeight;
    width = marginedBoxHeight * mapAspectRatio;
  }

  // Now we know the <canvas> is for example 2000*1000 and our map could be 100*50 so scale is '20'.
  // Which means when we draw a dot on the center of the map at (50,25),
  //  we should actually draw it at x20 these coordinates so at (1000,500) to draw in the center of the <canvas>
  const scale = width / map.width;

  return {
    scale,
    width,
    height,
  };
};

export type ScaledMap = ReturnType<typeof calculateCanvas>;

export default calculateCanvas;
