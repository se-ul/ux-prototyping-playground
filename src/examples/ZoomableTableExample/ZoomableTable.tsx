import { usePinch } from "@use-gesture/react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import "./ZoomableTable.css";

interface ZoomableTableProps {
  data: number[];
  listHeight: number;
  rowHeight: number;
}

export const ZoomableTable: React.FC<ZoomableTableProps> = ({
  data,
  listHeight,
  rowHeight,
}) => {
  const ref = useRef();
  const [origianlZoom, setZoom] = useState(1);
  const zoom = origianlZoom / 3;
  const maxZoom = Math.ceil(
    data.length / Math.floor(listHeight / rowHeight) / 5
  );
  const mergingLength = Math.max(1, (maxZoom - Math.floor(zoom)) * 5);
  const mergedItems = useMemo(() => {
    const items: number[] = [];
    for (let i = 0; i < data.length; i += mergingLength) {
      items.push(
        data
          .slice(i, i + mergingLength)
          .reduce((sum, current) => sum + current, 0) / mergingLength
      );
    }
    return items;
  }, [data, mergingLength]);

  usePinch(
    (state) => {
      setZoom(state.offset[0]);
    },
    {
      target: ref,
      pinch: { scaleBounds: { min: 1, max: maxZoom } },
    }
  );

  return (
    <div className="zoomable-table" ref={ref} style={{ height: listHeight }}>
      {Math.floor(zoom)} - {maxZoom} - {mergingLength}
      <AnimatePresence>
        <motion.div
          className="zoomable-table__items"
          key={mergedItems.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ height: rowHeight }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
          }}
        >
          {mergedItems
            .map((item) => (
              <motion.div
                style={{
                  height: rowHeight / 2 + (rowHeight * (zoom % 1)) / 3,
                }}
              >
                {Math.floor(item)}
              </motion.div>
            ))
            .slice(0, 100)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
