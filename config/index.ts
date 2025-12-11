import { NicheConfig, NicheSlug, isValidNiche } from "./types";
import { coachesConfig } from "./coaches";
import { studiosConfig } from "./studios";
import { healersConfig } from "./healers";
import { localbizConfig } from "./localbiz";
import { influencersConfig } from "./influencers";

const configs: Record<NicheSlug, NicheConfig> = {
  coaches: coachesConfig,
  studios: studiosConfig,
  healers: healersConfig,
  localbiz: localbizConfig,
  influencers: influencersConfig,
};

export function getNicheConfig(slug: string): NicheConfig | null {
  if (!isValidNiche(slug)) {
    return null;
  }
  return configs[slug];
}

export function getDefaultConfig(): NicheConfig {
  return configs.coaches;
}

export function getAllNiches(): NicheSlug[] {
  return Object.keys(configs) as NicheSlug[];
}

export { type NicheConfig, type NicheSlug } from "./types";
