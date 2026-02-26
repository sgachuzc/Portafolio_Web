import { useEffect, useState } from "react"

const sourceSites: string[] = [
  "facebook",
  "instagram"
]

export const useSearchParams = () => {
  const [showElement, setShowElement] = useState<boolean>(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('source') ?? "";

    if (sourceSites.includes(source)) {
      setShowElement(false);
    }
  }, []);

  return {
    showElement
  }
}
