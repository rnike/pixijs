import { getPo2TextureFromSource } from '../../../src/scene/text/html/utils/getPo2TextureFromSource';

describe('getPo2TextureFromSource#Label', () =>
{
    it('should give correct texture', () =>
    {
        const canvas = document.createElement('canvas');

        canvas.width = 100;
        canvas.height = 100;

        const texture = getPo2TextureFromSource(canvas, 100, 100, 1);

        expect(texture).toEqual(expect.objectContaining({
            frameWidth: 100,
            frameHeight: 100,
        }));

        expect(texture.source).toEqual(expect.objectContaining({
            pixelWidth: 128,
            pixelHeight: 128,
            width: 128,
            height: 128,
        }));

        canvas.width = 200;
        canvas.height = 200;

        const texture2 = getPo2TextureFromSource(canvas, 100, 100, 2);

        expect(texture2).toEqual(expect.objectContaining({
            frameWidth: 50,
            frameHeight: 50,
        }));

        expect(texture2.source).toEqual(expect.objectContaining({
            pixelWidth: 256,
            pixelHeight: 256,
            width: 128,
            height: 128,
        }));
    });
});
