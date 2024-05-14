export default (): boolean => {
  const userAgent = navigator.userAgent || navigator.vendor || '';
  // Windows Phone 必须放在前面，因为它的 UA 也包含 "Android"
  if (/windows phone/i.test(userAgent)) {
    console.log('Windows Phone');
    return true;
  }

  // iOS 设备
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    console.log('iOS');
    return true;
  }

  // Android 设备
  if (/android/i.test(userAgent)) {
    console.log('Android');
    return true;
  }

  // 检查是否支持多点触控，这通常意味着是移动设备
  if ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) {
    console.log('支持多点触控');
    return true;
  }
  return false;
};
