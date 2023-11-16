// import { ObservablePoint } from '../maths/point/ObservablePoint';
import { Point } from '../maths/point/Point';

import type { PointData } from '../maths/point/PointData';

export const mixins: any = {
    /**
     * Adds `other` to `this` point and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method add
     * @memberof PixiMixins.Point#
     * @param {PointData} other - The point to add to `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the result of the addition.
     */
    /**
     * Adds `other` to `this` point and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method add
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} other - The point to add to `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the result of the addition.
     */
    add<T extends PointData>(other: PointData, outPoint?: T): T
    {
        if (!outPoint)
        {
            outPoint = new Point() as PointData as T;
        }
        outPoint.x = this.x + other.x;
        outPoint.y = this.y + other.y;

        return outPoint;
    },

    /**
     * Subtracts `other` from `this` point and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method subtract
     * @memberof PixiMixins.Point#
     * @param {PointData} other - The point to subtract to `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the result of the subtraction.
     */
    /**
     * Subtracts `other` from `this` point and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method subtract
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} other - The point to subtract to `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the result of the subtraction.
     */
    subtract<T extends PointData>(other: PointData, outPoint?: T): T
    {
        if (!outPoint)
        {
            outPoint = new Point() as PointData as T;
        }
        outPoint.x = this.x - other.x;
        outPoint.y = this.y - other.y;

        return outPoint;
    },

    /**
     * Multiplies component-wise `other` and `this` points and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method multiply
     * @memberof PixiMixins.Point#
     * @param {PointData} other - The point to multiply with `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the component-wise multiplication.
     */
    /**
     * Multiplies component-wise `other` and `this` points and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method multiply
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} other - The point to multiply with `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the component-wise multiplication.
     */
    multiply<T extends PointData>(other: PointData, outPoint?: T): T
    {
        if (!outPoint)
        {
            outPoint = new Point() as PointData as T;
        }
        outPoint.x = this.x * other.x;
        outPoint.y = this.y * other.y;

        return outPoint;
    },

    /**
     * Multiplies each component of `this` point with the number `scalar` and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method multiplyScalar
     * @memberof PixiMixins.Point#
     * @param {number} scalar - The number to multiply both components of `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the multiplication.
     */
    /**
     * Multiplies each component of `this` point with the number `scalar` and outputs into `outPoint` or a new Point.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method multiplyScalar
     * @memberof PixiMixins.ObservablePoint#
     * @param {number} scalar - The number to multiply both components of `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `outPoint` reference or a new Point, with the multiplication.
     */
    multiplyScalar<T extends PointData>(scalar: number, outPoint?: T): T
    {
        if (!outPoint)
        {
            outPoint = new Point() as PointData as T;
        }
        outPoint.x = this.x * scalar;
        outPoint.y = this.y * scalar;

        return outPoint;
    },

    /**
     * Computes the dot product of `other` with `this` point.
     * The dot product is the sum of the products of the corresponding components of two vectors.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method dot
     * @memberof PixiMixins.Point#
     * @param {PointData} other - The other point to calculate the dot product with `this`.
     * @returns {number} The result of the dot product. This is an scalar value.
     */
    /**
     * Computes the dot product of `other` with `this` point.
     * The dot product is the sum of the products of the corresponding components of two vectors.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method dot
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} other - The other point to calculate the dot product with `this`.
     * @returns {number} The result of the dot product. This is an scalar value.
     */
    dot(other: PointData): number
    {
        return (this.x * other.x) + (this.y * other.y);
    },

    /**
     * Computes the cross product of `other` with `this` point.
     * Given two linearly independent R3 vectors a and b, the cross product, a × b (read "a cross b"),
     * is a vector that is perpendicular to both a and b, and thus normal to the plane containing them.
     * While cross product only exists on 3D space, we can assume the z component of 2D to be zero and
     * the result becomes a vector that will only have magnitude on the z axis.
     *
     * This function returns the z component of the cross product of the two points.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method cross
     * @memberof PixiMixins.Point#
     * @param {PointData} other - The other point to calculate the cross product with `this`.
     * @returns {number} The z component of the result of the cross product.
     */
    /**
     * Computes the cross product of `other` with `this` point.
     * Given two linearly independent R3 vectors a and b, the cross product, a × b (read "a cross b"),
     * is a vector that is perpendicular to both a and b, and thus normal to the plane containing them.
     * While cross product only exists on 3D space, we can assume the z component of 2D to be zero and
     * the result becomes a vector that will only have magnitude on the z axis.
     *
     * This function returns the z component of the cross product of the two points.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method cross
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} other - The other point to calculate the cross product with `this`.
     * @returns {number} The z component of the result of the cross product.
     */
    cross(other: PointData): number
    {
        /*
         * Returns the magnitude of the vector that would result
         * from a regular 3D cross product of the input vectors,
         * taking their Z values implicitly as 0
         * (i.e. treating the 2D space as a plane in the 3D space).
         * The 3D cross product will be perpendicular to that plane,
         * and thus have 0 X & Y components
         * (thus the scalar returned is the Z value of the 3D cross product vector).
         */
        return (this.x * other.y) - (this.y * other.x);
    },

    /**
     * Computes a normalized version of `this` point.
     *
     * A normalized vector is a vector of magnitude (length) 1
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method normalize
     * @memberof PixiMixins.Point#
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The normalized point.
     */
    /**
     * Computes a normalized version of `this` point.
     *
     * A normalized vector is a vector of magnitude (length) 1
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method normalize
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The normalized point.
     */
    normalize<T extends PointData>(outPoint?: T): T
    {
        if (!outPoint)
        {
            outPoint = new Point() as PointData as T;
        }
        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));

        outPoint.x = this.x / magnitude;
        outPoint.y = this.y / magnitude;

        return outPoint;
    },

    /**
     * Computes the magnitude of this point (Euclidean distance from 0, 0).
     *
     * Defined as the square root of the sum of the squares of each component.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method magnitude
     * @memberof PixiMixins.Point#
     * @returns {number} The magnitude (length) of the vector.
     */
    /**
     * Computes the magnitude of this point (Euclidean distance from 0, 0).
     *
     * Defined as the square root of the sum of the squares of each component.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method magnitude
     * @memberof PixiMixins.ObservablePoint#
     * @returns {number} The magnitude (length) of the vector.
     */
    magnitude(): number
    {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    },

    /**
     * Computes the square magnitude of this point.
     * If you are comparing the lengths of vectors, you should compare the length squared instead
     * as it is slightly more efficient to calculate.
     *
     * Defined as the sum of the squares of each component.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method magnitudeSquared
     * @memberof PixiMixins.Point#
     * @returns {number} The magnitude squared (length squared) of the vector.
     */
    /**
     * Computes the square magnitude of this point.
     * If you are comparing the lengths of vectors, you should compare the length squared instead
     * as it is slightly more efficient to calculate.
     *
     * Defined as the sum of the squares of each component.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method magnitudeSquared
     * @memberof PixiMixins.ObservablePoint#
     * @returns {number} The magnitude squared (length squared) of the vector.
     */
    magnitudeSquared(): number
    {
        return (this.x * this.x) + (this.y * this.y);
    },

    /**
     * Computes vector projection of `this` on `onto`.
     *
     * Imagine a light source, parallel to `onto`, above `this`.
     * The light would cast rays perpendicular to `onto`.
     * `this.project(onto)` is the shadow cast by `this` on the line defined by `onto` .
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method project
     * @memberof PixiMixins.Point#
     * @param {PointData} onto - A non zero vector describing a line on which to project `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `this` on `onto` projection.
     */
    /**
     * Computes vector projection of `this` on `onto`.
     *
     * Imagine a light source, parallel to `onto`, above `this`.
     * The light would cast rays perpendicular to `onto`.
     * `this.project(onto)` is the shadow cast by `this` on the line defined by `onto` .
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method project
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} onto - A non zero vector describing a line on which to project `this`.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The `this` on `onto` projection.
     */
    project<T extends PointData>(onto: PointData, outPoint?: T): T
    {
        if (!outPoint)
        {
            outPoint = new Point() as PointData as T;
        }
        // Math says: a Projected over b = [(a·b) / (b·b)] * b;
        const normalizedScalarProjection = ((this.x * onto.x) + (this.y * onto.y)) / ((onto.x * onto.x) + (onto.y * onto.y));

        outPoint.x = onto.x * normalizedScalarProjection;
        outPoint.y = onto.y * normalizedScalarProjection;

        return outPoint;
    },

    /**
     * Reflects `this` vector off of a plane orthogonal to `normal`.
     * `normal` is not normalized during this process. Consider normalizing your `normal` before use.
     *
     * Imagine a light source bouncing onto a mirror.
     * `this` vector is the light and `normal` is a vector perpendicular to the mirror.
     * `this.reflect(normal)` is the reflection of `this` on that mirror.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method reflect
     * @memberof PixiMixins.Point#
     * @param {PointData} normal - The normal vector of your reflecting plane.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The reflection of `this` on your reflecting plane.
     */
    /**
     * Reflects `this` vector off of a plane orthogonal to `normal`.
     * `normal` is not normalized during this process. Consider normalizing your `normal` before use.
     *
     * Imagine a light source bouncing onto a mirror.
     * `this` vector is the light and `normal` is a vector perpendicular to the mirror.
     * `this.reflect(normal)` is the reflection of `this` on that mirror.
     *
     * _Note: Only available with **@pixi/math-extras**._
     * @method reflect
     * @memberof PixiMixins.ObservablePoint#
     * @param {PointData} normal - The normal vector of your reflecting plane.
     * @param {PointData} [outPoint] - A Point-like object in which to store the value,
     * optional (otherwise will create a new Point).
     * @returns {PointData} The reflection of `this` on your reflecting plane.
     */
    reflect<T extends PointData>(normal: PointData, outPoint?: T): T
    {
        if (!outPoint)
        {
            outPoint = new Point() as PointData as T;
        }

        // Given an incident vector i and a normal vector n, returns the reflection vector r = i - 2 * dot(i, n) * n

        const dotProduct = (this.x * normal.x) + (this.y * normal.y);

        outPoint.x = this.x - (2 * dotProduct * normal.x);
        outPoint.y = this.y - (2 * dotProduct * normal.y);

        return outPoint;
    }
};

// Object.assign(Point.prototype, mixins);
// Object.assign(ObservablePoint.prototype, mixins);
