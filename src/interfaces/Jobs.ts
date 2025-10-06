export interface Job {
  company: string,
  logoUrl: string,
  subtitle: string
  href?: string,
  badges?: string[],
  start: string,
  end: string
  description: string
}