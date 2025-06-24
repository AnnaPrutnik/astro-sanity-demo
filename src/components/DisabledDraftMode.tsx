'use client';

import { useEffect, useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';
import { disableDraftMode } from '@/app/actions';

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [isTopWindow, setIsTopWindow] = useState(false);

  useEffect(() => {
    // ✅ This runs only in the browser
    if (window === window.parent && !window.opener) {
      setIsTopWindow(true);
    }
  }, []);
  // if (!window || window !== window.parent || !!window.opener) {
  //   return null;
  // }
  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  if (!isTopWindow) return null;
  return (
    <div>
      {pending ? (
        'Disabling draft mode...'
      ) : (
        <button type="button" onClick={disable}>
          Disable draft mode
        </button>
      )}
    </div>
  );
}
