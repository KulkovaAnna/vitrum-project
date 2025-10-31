import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function useFormatStaticSrc(src: string) {
  const { i18n, siteConfig } = useDocusaurusContext();

  if (!src.startsWith('/')) return src;

  const locale =
    i18n.currentLocale === i18n.defaultLocale ? '' : i18n.currentLocale;
  let prefix = (siteConfig.customFields.env as Record<string, string>)
    .assetPrefix;

  if (prefix.startsWith('/')) {
    prefix = prefix.slice(1);
  }

  if (prefix.endsWith('/')) {
    prefix = prefix.slice(0, prefix.length - 1);
  }

  return `/${prefix}${locale ? '/' + locale : ''}${src}`;
}
