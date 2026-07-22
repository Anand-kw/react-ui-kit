// Card.tsx - Fixed version to handle header objects
import React from 'react';

export interface CardProps {
  // Core Content
  header?: string | React.ReactNode | any;
  subtitle?: string | React.ReactNode;
  body?: string | React.ReactNode | any;
  footer?: string | React.ReactNode | any;
  children?: React.ReactNode;
  
  // Image
  image?: {
    src: string;
    alt?: string;
    position?: 'top' | 'bottom' | 'left' | 'right' | 'background';
    height?: string | number;
    overlay?: boolean;
    overlayOpacity?: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  };
  
  // Colors & Gradients
  gradient?: {
    from: string;
    to: string;
    degree?: number;
  };
  backgroundColor?: string;
  textColor?: string;
  
  // Styling
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'transparent' | 'gradient';
  size?: 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  padding?: 'none' | 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl';
  rounded?: 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  shadow?: 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | '2xl' | 'inner';
  border?: boolean;
  borderColor?: string;
  overflow?: 'visible' | 'hidden' | 'auto' | 'scroll';
  fullWidth?: boolean;
  minHeight?: string | number;
  maxHeight?: string | number;
  
  // Interactive
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  // Animation
  animate?: boolean;
  transition?: boolean;
  
  // Accessibility
  role?: string;
  ariaLabel?: string;
  tabIndex?: number;
  id?: string;
  style?: React.CSSProperties;
}

// Helper functions
const isString = (value: any): value is string => typeof value === 'string';
const isReactElement = (value: any): value is React.ReactElement => React.isValidElement(value);
const isObject = (value: any): value is Record<string, any> => 
  typeof value === 'object' && value !== null && !React.isValidElement(value);

// Helper to check if string contains HTML
const isHTMLString = (str: string): boolean => {
  if (!str) return false;
  const htmlRegex = /<([a-z][a-z0-9]*)\b[^>]*>.*?<\/\1>|<([a-z][a-z0-9]*)\b[^>]*\/?>/i;
  return htmlRegex.test(str);
};

// Helper to render HTML content safely
const renderHTMLContent = (htmlString: string): React.ReactNode => {
  if (!htmlString) return null;
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Helper to render content (string, HTML, or React element)
const renderContent = (content: any): React.ReactNode => {
  if (!content) return null;
  
  if (isString(content)) {
    if (isHTMLString(content)) {
      return renderHTMLContent(content);
    }
    return content;
  }
  
  if (isReactElement(content)) {
    return content;
  }
  
  // If it's an object, return null to prevent direct rendering
  if (isObject(content)) {
    return null;
  }
  
  return content;
};

const Card: React.FC<CardProps> = ({
  header,
  subtitle,
  body,
  footer,
  children,
  image,
  gradient,
  backgroundColor,
  textColor,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  variant = 'default',
  size = 'default',
  padding = 'default',
  rounded = 'xl',
  shadow = 'sm',
  border = true,
  borderColor = 'gray-200',
  overflow = 'visible',
  fullWidth = false,
  minHeight,
  maxHeight,
  hoverable = false,
  clickable = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  animate = false,
  transition = true,
  role = 'article',
  ariaLabel,
  tabIndex,
  id,
  style,
}) => {
  // Gradient style
  const gradientStyle = gradient 
    ? {
        background: `linear-gradient(${gradient.degree || 135}deg, ${gradient.from}, ${gradient.to})`,
      }
    : {};

  // Background color style
  const bgStyle = backgroundColor ? { backgroundColor } : {};

  // Text color style
  const textStyle = textColor ? { color: textColor } : {};

  // Combined styles
  const combinedStyle = {
    ...gradientStyle,
    ...bgStyle,
    ...textStyle,
    ...style,
  };

  // Variants
  const variants: Record<string, string> = {
    default: 'bg-white',
    primary: 'bg-blue-50',
    secondary: 'bg-gray-50',
    success: 'bg-green-50',
    warning: 'bg-yellow-50',
    danger: 'bg-red-50',
    info: 'bg-cyan-50',
    dark: 'bg-gray-800 text-white',
    transparent: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50',
  };

  // Sizes
  const sizes: Record<string, string> = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    default: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-xl',
    xl: 'max-w-2xl',
    '2xl': 'max-w-3xl',
    '3xl': 'max-w-4xl',
    full: 'max-w-full',
  };

  // Paddings
  const paddings: Record<string, string> = {
    none: 'p-0',
    xs: 'p-1',
    sm: 'p-2',
    default: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
    '2xl': 'p-12',
  };

  // Rounded
  const roundeds: Record<string, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    default: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  };

  // Shadows
  const shadows: Record<string, string> = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    default: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    inner: 'shadow-inner',
  };

  // Overflow
  const overflows: Record<string, string> = {
    visible: 'overflow-visible',
    hidden: 'overflow-hidden',
    auto: 'overflow-auto',
    scroll: 'overflow-scroll',
  };

  const getPadding = (pad: string): string => {
    return pad === 'none' ? 'p-0' : paddings[pad] || paddings.default;
  };

  // Render image
  const renderImage = () => {
    if (!image) return null;

    const imageClasses = `
      ${image.position === 'top' ? 'rounded-t-xl' : ''}
      ${image.position === 'bottom' ? 'rounded-b-xl' : ''}
      ${image.position === 'background' ? 'absolute inset-0 w-full h-full object-cover' : 'w-full object-cover'}
      ${image.position === 'left' || image.position === 'right' ? 'h-full w-1/3 object-cover' : ''}
    `;

    const imageElement = (
      <img
        src={image.src}
        alt={image.alt || 'Card image'}
        className={imageClasses}
        style={{ 
          height: image.position === 'background' ? '100%' : image.height || '200px',
          maxHeight: image.position === 'top' ? '300px' : undefined,
        }}
      />
    );

    if (image.position === 'background') {
      return (
        <>
          {imageElement}
          {image.overlay && (
            <div 
              className={`absolute inset-0 bg-black/${image.overlayOpacity || 50}`}
            />
          )}
        </>
      );
    }

    return imageElement;
  };

  // Render header - FIXED to handle header objects properly
  const renderHeader = () => {
    if (!header && !subtitle) return null;

    const headerPadding = getPadding(padding);

    // If header is a string and subtitle is provided
    if (isString(header) && subtitle) {
      return (
        <div className={`${headerPadding} border-b border-${borderColor} ${headerClassName}`}>
          <div style={textStyle}>{renderContent(header)}</div>
          {subtitle && (
            <div className="text-sm text-gray-500 mt-0.5" style={textStyle}>
              {renderContent(subtitle)}
            </div>
          )}
        </div>
      );
    }

    // If only header is a string
    if (isString(header)) {
      return (
        <div className={`${headerPadding} border-b border-${borderColor} ${headerClassName}`}>
          <div style={textStyle}>{renderContent(header)}</div>
        </div>
      );
    }

    // If header is React element
    if (isReactElement(header)) {
      return header;
    }

    // If header is an object (rich header) - HANDLE THIS PROPERLY
    if (isObject(header)) {
      const {
        title,
        subtitle: headerSubtitle,
        icon,
        iconPosition = 'left',
        action,
        className: hClass = '',
        titleClassName = '',
        subtitleClassName = '',
        divider = true,
        align = 'left',
        size: titleSize = 'default',
      } = header;

      const titleSizes: Record<string, string> = {
        xs: 'text-xs',
        sm: 'text-sm',
        default: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl',
      };

      const alignClasses: Record<string, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      };

      const iconPositions: Record<string, string> = {
        left: 'flex-row',
        right: 'flex-row-reverse',
      };

      const headerDivider = divider ? `border-b border-${borderColor}` : '';

      // Render all parts with proper HTML handling
      const renderedTitle = title ? renderContent(title) : null;
      const renderedSubtitle = headerSubtitle ? renderContent(headerSubtitle) : null;
      const renderedAction = action ? renderContent(action) : null;
      const renderedIcon = icon ? (
        isString(icon) ? <span className="text-2xl">{icon}</span> : renderContent(icon)
      ) : null;

      return (
        <div 
          className={`
            ${headerPadding} 
            ${headerDivider} 
            ${alignClasses[align]}
            ${hClass || headerClassName}
          `}
        >
          <div className={`flex items-center ${iconPositions[iconPosition]} gap-3`}>
            {renderedIcon && (
              <span className="flex-shrink-0 text-gray-500">
                {renderedIcon}
              </span>
            )}
            <div className="flex-1 min-w-0">
              {renderedTitle && (
                <div className={`${titleSizes[titleSize]} font-semibold ${titleClassName}`} style={textStyle}>
                  {renderedTitle}
                </div>
              )}
              {renderedSubtitle && (
                <div className={`text-sm text-gray-500 mt-0.5 ${subtitleClassName}`} style={textStyle}>
                  {renderedSubtitle}
                </div>
              )}
            </div>
            {renderedAction && (
              <div className="flex-shrink-0">{renderedAction}</div>
            )}
          </div>
        </div>
      );
    }

    // If header is anything else, convert to string or return null
    return header ? String(header) : null;
  };

  // Render body
  const renderBody = () => {
    const content = body || children;
    if (!content) return null;

    const bodyPadding = getPadding(padding);

    if (isString(content)) {
      return (
        <div className={`${bodyPadding} ${bodyClassName}`}>
          <div style={textStyle}>{renderContent(content)}</div>
        </div>
      );
    }

    if (isReactElement(content)) {
      return (
        <div className={`${bodyPadding} ${bodyClassName}`}>
          {content}
        </div>
      );
    }

    if (isObject(content)) {
      const {
        text,
        className: bClass = '',
        textClassName = '',
        align = 'left',
        loading = false,
        empty = false,
        emptyText = 'No content available',
        children: bodyChildren,
      } = content;

      const alignClasses: Record<string, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      };

      if (loading) {
        return (
          <div className={`${bodyPadding} ${bClass || bodyClassName}`}>
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        );
      }

      if (empty) {
        return (
          <div className={`${bodyPadding} ${bClass || bodyClassName}`}>
            <p className={`text-center text-gray-400 ${textClassName}`}>{emptyText}</p>
          </div>
        );
      }

      const renderedText = text ? renderContent(text) : null;

      return (
        <div className={`${bodyPadding} ${alignClasses[align]} ${bClass || bodyClassName}`}>
          {renderedText && <div className={`${textClassName}`} style={textStyle}>{renderedText}</div>}
          {bodyChildren}
        </div>
      );
    }

    return content;
  };

  // Render footer
  const renderFooter = () => {
    if (!footer) return null;

    const footerPadding = getPadding(padding);

    if (isString(footer)) {
      return (
        <div className={`${footerPadding} border-t border-${borderColor} ${footerClassName}`}>
          <div style={textStyle}>{renderContent(footer)}</div>
        </div>
      );
    }

    if (isReactElement(footer)) {
      return footer;
    }

    if (isObject(footer)) {
      const {
        text,
        actions,
        className: fClass = '',
        textClassName = '',
        divider = true,
        align = 'right',
        actionsClassName = '',
      } = footer;

      const footerAlignClasses: Record<string, string> = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      };

      const footerDivider = divider ? `border-t border-${borderColor}` : '';

      const renderedText = text ? renderContent(text) : null;
      const renderedActions = actions ? renderContent(actions) : null;

      return (
        <div 
          className={`
            ${footerPadding} 
            ${footerDivider} 
            flex items-center gap-3
            ${footerAlignClasses[align] || 'justify-end'}
            ${fClass || footerClassName}
          `}
        >
          {renderedText && (
            <div className={`text-sm text-gray-600 ${textClassName}`} style={textStyle}>
              {renderedText}
            </div>
          )}
          {renderedActions && (
            <div className={`flex items-center gap-2 ${actionsClassName}`}>
              {renderedActions}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  // City Card: Image on top with overlay
  const isCityCard = image?.position === 'top' && image?.overlay;

  return (
    <div
      id={id}
      className={`
        ${variants[variant] || variants.default}
        ${fullWidth ? 'w-full' : sizes[size] || sizes.default}
        ${roundeds[rounded] || roundeds.xl}
        ${shadows[shadow] || shadows.sm}
        ${border ? `border border-${borderColor}` : 'border-0'}
        ${overflows[overflow] || overflows.visible}
        ${transition ? 'transition-all duration-200 ease-in-out' : ''}
        ${animate ? 'animate-fade-in-up' : ''}
        ${hoverable ? 'hover:shadow-lg hover:-translate-y-1 hover:border-gray-300' : ''}
        ${clickable ? 'cursor-pointer active:scale-[0.98]' : ''}
        ${className}
      `}
      style={{
        minHeight,
        maxHeight,
        ...combinedStyle,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role={role}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {/* Background Image */}
      {image?.position === 'background' && (
        <div className="relative w-full h-full min-h-[200px]">
          {renderImage()}
          <div className="relative z-10">
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
          </div>
        </div>
      )}

      {/* Top Image (City Card Style) */}
      {image?.position === 'top' && (
        <>
          <div className="relative">
            {renderImage()}
            {image.overlay && (
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/${image.overlayOpacity || 50} to-transparent`}
              />
            )}
            {/* Title overlay on image for city card */}
            {isCityCard && (header || subtitle) && (
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                {header && <div style={textStyle}>{renderContent(header)}</div>}
                {subtitle && <div className="text-sm opacity-90" style={textStyle}>{renderContent(subtitle)}</div>}
              </div>
            )}
          </div>
          <div>
            {!isCityCard && renderHeader()}
            {renderBody()}
            {renderFooter()}
          </div>
        </>
      )}

      {/* Bottom Image */}
      {image?.position === 'bottom' && (
        <>
          {renderHeader()}
          {renderBody()}
          {renderFooter()}
          {renderImage()}
        </>
      )}

      {/* Left Image */}
      {image?.position === 'left' && (
        <div className="flex">
          <div className="flex-shrink-0 w-1/3">{renderImage()}</div>
          <div className="flex-1">
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
          </div>
        </div>
      )}

      {/* Right Image */}
      {image?.position === 'right' && (
        <div className="flex">
          <div className="flex-1">
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
          </div>
          <div className="flex-shrink-0 w-1/3">{renderImage()}</div>
        </div>
      )}

      {/* No Image */}
      {!image && (
        <>
          {renderHeader()}
          {renderBody()}
          {renderFooter()}
        </>
      )}
    </div>
  );
};

export default Card;