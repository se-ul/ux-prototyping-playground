export const PermissionButton: React.FC = () => {
  return (
    <button
      onClick={() => {
        (DeviceMotionEvent as any)?.requestPermission().then(console.log);
        (DeviceOrientationEvent as any)?.requestPermission().then(console.log);
      }}
    >
      권한 허용하기
    </button>
  );
};
